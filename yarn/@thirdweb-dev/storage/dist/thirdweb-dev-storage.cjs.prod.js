'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fetch = require('cross-fetch');
var FormData = require('form-data');
var uuid = require('uuid');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefault(fetch);
var FormData__default = /*#__PURE__*/_interopDefault(FormData);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * @internal
 */
const DEFAULT_GATEWAY_URLS = {
  // Note: Gateway URLs should have trailing slashes (we clean this on user input)
  "ipfs://": ["https://gateway.ipfscdn.io/ipfs/", "https://cloudflare-ipfs.com/ipfs/", "https://ipfs.io/ipfs/"]
};
/**
 * @internal
 */

const TW_IPFS_SERVER_URL = "https://upload.nftlabs.co";
/**
 * @internal
 */

const PINATA_IPFS_URL = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
/**
 * @internal
 */

function prepareGatewayUrls(gatewayUrls) {
  const allGatewayUrls = { ...gatewayUrls,
    ...DEFAULT_GATEWAY_URLS
  };

  for (const key of Object.keys(DEFAULT_GATEWAY_URLS)) {
    if (gatewayUrls && gatewayUrls[key]) {
      // Make sure that all user gateway URLs have trailing slashes
      const cleanedGatewayUrls = gatewayUrls[key].map(url => url.replace(/\/$/, "") + "/");
      allGatewayUrls[key] = [...cleanedGatewayUrls, ...DEFAULT_GATEWAY_URLS[key]];
    }
  }

  return allGatewayUrls;
}

/**
 * @internal
 */
function isBrowser() {
  return typeof window !== "undefined";
}
/**
 * @internal
 */

function isFileInstance(data) {
  return global.File && data instanceof File;
}
/**
 * @internal
 */

function isBufferInstance(data) {
  return global.Buffer && data instanceof Buffer;
}
/**
 * @internal
 */

function isBufferOrStringWithName(data) {
  return !!(data && data.name && data.data && typeof data.name === "string" && (typeof data.data === "string" || isBufferInstance(data.data)));
}
function isFileOrBuffer(data) {
  return isFileInstance(data) || isBufferInstance(data) || isBufferOrStringWithName(data);
}
/**
 * @internal
 */

function isFileBufferOrStringEqual(input1, input2) {
  if (isFileInstance(input1) && isFileInstance(input2)) {
    // if both are File types, compare the name, size, and last modified date (best guess that these are the same files)
    if (input1.name === input2.name && input1.lastModified === input2.lastModified && input1.size === input2.size) {
      return true;
    }
  } else if (isBufferInstance(input1) && isBufferInstance(input2)) {
    // buffer gives us an easy way to compare the contents!
    return input1.equals(input2);
  } else if (isBufferOrStringWithName(input1) && isBufferOrStringWithName(input2)) {
    // first check the names
    if (input1.name === input2.name) {
      // if the data for both is a string, compare the strings
      if (typeof input1.data === "string" && typeof input2.data === "string") {
        return input1.data === input2.data;
      } else if (isBufferInstance(input1.data) && isBufferInstance(input2.data)) {
        // otherwise we know it's buffers, so compare the buffers
        return input1.data.equals(input2.data);
      }
    }
  } // otherwise if we have not found a match, return false


  return false;
}
/**
 * @internal
 */

function replaceGatewayUrlWithScheme(uri, gatewayUrls) {
  for (const scheme of Object.keys(gatewayUrls)) {
    for (const url of gatewayUrls[scheme]) {
      if (uri.startsWith(url)) {
        return uri.replace(url, scheme);
      }
    }
  }

  return uri;
}
/**
 * @internal
 */

function replaceSchemeWithGatewayUrl(uri, gatewayUrls) {
  let index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const scheme = Object.keys(gatewayUrls).find(s => uri.startsWith(s));
  const schemeGatewayUrls = scheme ? gatewayUrls[scheme] : [];

  if (!scheme && index > 0 || scheme && index >= schemeGatewayUrls.length) {
    return undefined;
  }

  if (!scheme) {
    return uri;
  }

  return uri.replace(scheme, schemeGatewayUrls[index]);
}
/**
 * @internal
 */

function replaceObjectGatewayUrlsWithSchemes(data, gatewayUrls) {
  if (typeof data === "string") {
    return replaceGatewayUrlWithScheme(data, gatewayUrls);
  }

  if (typeof data === "object") {
    if (!data) {
      return data;
    }

    if (isFileOrBuffer(data)) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(entry => replaceObjectGatewayUrlsWithSchemes(entry, gatewayUrls));
    }

    return Object.fromEntries(Object.entries(data).map(_ref => {
      let [key, value] = _ref;
      return [key, replaceObjectGatewayUrlsWithSchemes(value, gatewayUrls)];
    }));
  }

  return data;
}
/**
 * @internal
 */

function replaceObjectSchemesWithGatewayUrls(data, gatewayUrls) {
  if (typeof data === "string") {
    return replaceSchemeWithGatewayUrl(data, gatewayUrls);
  }

  if (typeof data === "object") {
    if (!data) {
      return data;
    }

    if (isFileOrBuffer(data)) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(entry => replaceObjectSchemesWithGatewayUrls(entry, gatewayUrls));
    }

    return Object.fromEntries(Object.entries(data).map(_ref2 => {
      let [key, value] = _ref2;
      return [key, replaceObjectSchemesWithGatewayUrls(value, gatewayUrls)];
    }));
  }

  return data;
}
/**
 * @internal
 */

function extractObjectFiles(data) {
  let files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  // If item is a FileOrBuffer add it to our list of files
  if (isFileOrBuffer(data)) {
    files.push(data);
    return files;
  }

  if (typeof data === "object") {
    if (!data) {
      return files;
    }

    if (Array.isArray(data)) {
      data.forEach(entry => extractObjectFiles(entry, files));
    } else {
      Object.keys(data).map(key => extractObjectFiles(data[key], files));
    }
  }

  return files;
}
/**
 * @internal
 */

function replaceObjectFilesWithUris(data, uris) {
  if (isFileOrBuffer(data)) {
    if (uris.length) {
      data = uris.shift();
      return data;
    } else {
      console.warn("Not enough URIs to replace all files in object.");
    }
  }

  if (typeof data === "object") {
    if (!data) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(entry => replaceObjectFilesWithUris(entry, uris));
    } else {
      return Object.fromEntries(Object.entries(data).map(_ref3 => {
        let [key, value] = _ref3;
        return [key, replaceObjectFilesWithUris(value, uris)];
      }));
    }
  }

  return data;
}

/**
 * Default downloader used - handles downloading from all schemes specified in the gateway URLs configuration.
 *
 * @example
 * ```jsx
 * // Can instantiate the downloader with the default gateway URLs
 * const downloader = new StorageDownloader();
 * const storage = new ThirdwebStorage({ downloader });
 * ```
 *
 * @public
 */

class StorageDownloader {
  async download(uri, gatewayUrls) {
    let attempts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (attempts > 3) {
      throw new Error("[FAILED_TO_DOWNLOAD_ERROR] Failed to download from URI - too many attempts failed.");
    } // Replace recognized scheme with the highest priority gateway URL that hasn't already been attempted


    const resolvedUri = replaceSchemeWithGatewayUrl(uri, gatewayUrls, attempts); // If every gateway URL we know about for the designated scheme has been tried (via recursion) and failed, throw an error

    if (!resolvedUri) {
      throw new Error("[FAILED_TO_DOWNLOAD_ERROR] Unable to download from URI - all gateway URLs failed to respond.");
    }

    const res = await fetch__default["default"](resolvedUri); // If request to the current gateway fails, recursively try the next one we know about

    if (res.status >= 500 || res.status === 403 || res.status === 408) {
      console.warn(`Request to ${resolvedUri} failed with status ${res.status} - ${res.statusText}`);
      return this.download(uri, gatewayUrls, attempts + 1);
    }

    return res;
  }

}

/**
 * Default uploader used - handles uploading arbitrary data to IPFS
 *
 * @example
 * ```jsx
 * // Can instantiate the uploader with default configuration
 * const uploader = new StorageUploader();
 * const storage = new ThirdwebStorage({ uploader });
 *
 * // Or optionally, can pass configuration
 * const options = {
 *   // Upload objects with resolvable URLs
 *   uploadWithGatewayUrl: true,
 * }
 * const uploader = new StorageUploader(options);
 * const storage = new ThirdwebStorage({ uploader });
 * ```
 *
 * @public
 */

class IpfsUploader {
  constructor(options) {
    _defineProperty(this, "uploadWithGatewayUrl", void 0);

    this.uploadWithGatewayUrl = (options === null || options === void 0 ? void 0 : options.uploadWithGatewayUrl) || false;
  }

  async uploadBatch(data, options) {
    if (options !== null && options !== void 0 && options.uploadWithoutDirectory && data.length > 1) {
      throw new Error("[UPLOAD_WITHOUT_DIRECTORY_ERROR] Cannot upload more than one file or object without directory!");
    }

    const formData = new FormData__default["default"]();
    const {
      form,
      fileNames
    } = this.buildFormData(formData, data, options);

    if (isBrowser()) {
      return this.uploadBatchBrowser(form, fileNames, options);
    } else {
      return this.uploadBatchNode(form, fileNames, options);
    }
  }
  /**
   * Fetches a one-time-use upload token that can used to upload
   * a file to storage.
   *
   * @returns - The one time use token that can be passed to the Pinata API.
   */


  async getUploadToken() {
    const res = await fetch__default["default"](`${TW_IPFS_SERVER_URL}/grant`, {
      method: "GET",
      headers: {
        "X-APP-NAME": // eslint-disable-next-line turbo/no-undeclared-env-vars
        !!process.env.CI ? "Storage SDK CI" : "Storage SDK"
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to get upload token`);
    }

    const body = await res.text();
    return body;
  }

  buildFormData(form, files, options) {
    const fileNameToFileMap = new Map();
    const fileNames = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let fileName = "";
      let fileData = file;

      if (isFileInstance(file)) {
        if (options !== null && options !== void 0 && options.rewriteFileNames) {
          let extensions = "";

          if (file.name) {
            const extensionStartIndex = file.name.lastIndexOf(".");

            if (extensionStartIndex > -1) {
              extensions = file.name.substring(extensionStartIndex);
            }
          }

          fileName = `${i + options.rewriteFileNames.fileStartNumber}${extensions}`;
        } else {
          fileName = `${file.name}`;
        }
      } else if (isBufferOrStringWithName(file)) {
        fileData = file.data;

        if (options !== null && options !== void 0 && options.rewriteFileNames) {
          fileName = `${i + options.rewriteFileNames.fileStartNumber}`;
        } else {
          fileName = `${file.name}`;
        }
      } else {
        if (options !== null && options !== void 0 && options.rewriteFileNames) {
          fileName = `${i + options.rewriteFileNames.fileStartNumber}`;
        } else {
          fileName = `${i}`;
        }
      } // If we don't want to wrap with directory, adjust the filepath


      const filepath = options !== null && options !== void 0 && options.uploadWithoutDirectory ? `files` : `files/${fileName}`;

      if (fileNameToFileMap.has(fileName)) {
        // if the file in the map is the same as the file we are already looking at then just skip and continue
        if (isFileBufferOrStringEqual(fileNameToFileMap.get(fileName), file)) {
          // we add it to the filenames array so that we can return the correct number of urls,
          fileNames.push(fileName); // but then we skip because we don't need to upload it multiple times

          continue;
        } // otherwise if file names are the same but they are not the same file then we should throw an error (trying to upload to differnt files but with the same names)


        throw new Error(`[DUPLICATE_FILE_NAME_ERROR] File name ${fileName} was passed for more than one different file.`);
      } // add it to the map so that we can check for duplicates


      fileNameToFileMap.set(fileName, file); // add it to the filenames array so that we can return the correct number of urls

      fileNames.push(fileName);

      if (!isBrowser()) {
        form.append("file", fileData, {
          filepath
        });
      } else {
        // browser does blob things, filepath is parsed differently on browser vs node.
        // pls pinata?
        form.append("file", new Blob([fileData]), filepath);
      }
    }

    const metadata = {
      name: `Storage SDK`,
      keyvalues: {}
    };
    form.append("pinataMetadata", JSON.stringify(metadata));

    if (options !== null && options !== void 0 && options.uploadWithoutDirectory) {
      form.append("pinataOptions", JSON.stringify({
        wrapWithDirectory: false
      }));
    }

    return {
      form,
      // encode the file names on the way out (which is what the upload backend expects)
      fileNames: fileNames.map(fName => encodeURIComponent(fName))
    };
  }

  async uploadBatchBrowser(form, fileNames, options) {
    const token = await this.getUploadToken();
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      let timer = setTimeout(() => {
        xhr.abort();
        reject(new Error("Request to upload timed out! No upload progress received in 30s"));
      }, 30000);
      xhr.upload.addEventListener("loadstart", () => {
        console.log(`[${Date.now()}] [IPFS] Started`);
      });
      xhr.upload.addEventListener("progress", event => {
        console.log(`[IPFS] Progress Event ${event.loaded}/${event.total}`);
        clearTimeout(timer);

        if (event.loaded < event.total) {
          timer = setTimeout(() => {
            xhr.abort();
            reject(new Error("Request to upload timed out! No upload progress received in 30s"));
          }, 30000);
        } else {
          console.log(`[${Date.now()}] [IPFS] Uploaded files. Waiting for response.`);
        }

        if (event.lengthComputable && options !== null && options !== void 0 && options.onProgress) {
          options === null || options === void 0 ? void 0 : options.onProgress({
            progress: event.loaded,
            total: event.total
          });
        }
      });
      xhr.addEventListener("load", () => {
        console.log(`[${Date.now()}] [IPFS] Load`);
        clearTimeout(timer);

        if (xhr.status >= 200 && xhr.status < 300) {
          let body;

          try {
            body = JSON.parse(xhr.responseText);
          } catch (err) {
            return reject(new Error("Failed to parse JSON from upload response"));
          }

          const cid = body.IpfsHash;

          if (!cid) {
            throw new Error("Failed to get IPFS hash from upload response");
          }

          if (options !== null && options !== void 0 && options.uploadWithoutDirectory) {
            return resolve([`ipfs://${cid}`]);
          } else {
            return resolve(fileNames.map(name => `ipfs://${cid}/${name}`));
          }
        }

        return reject(new Error(`Upload failed with status ${xhr.status} - ${xhr.responseText}`));
      });
      xhr.addEventListener("error", () => {
        console.log("[IPFS] Load");
        clearTimeout(timer);

        if (xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0) {
          return reject(new Error("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."));
        }

        return reject(new Error("Unknown upload error occured"));
      });
      xhr.open("POST", PINATA_IPFS_URL);
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.send(form);
    });
  }

  async uploadBatchNode(form, fileNames, options) {
    const token = await this.getUploadToken();

    if (options !== null && options !== void 0 && options.onProgress) {
      console.warn("The onProgress option is only supported in the browser");
    }

    const res = await fetch__default["default"](PINATA_IPFS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...form.getHeaders()
      },
      body: form.getBuffer()
    });
    const body = await res.json();

    if (!res.ok) {
      console.warn(body);
      throw new Error("Failed to upload files to IPFS");
    }

    const cid = body.IpfsHash;

    if (!cid) {
      throw new Error("Failed to upload files to IPFS");
    }

    if (options !== null && options !== void 0 && options.uploadWithoutDirectory) {
      return [`ipfs://${cid}`];
    } else {
      return fileNames.map(name => `ipfs://${cid}/${name}`);
    }
  }

}

/**
 * Upload and download files from decentralized storage systems.
 *
 * @example
 * ```jsx
 * // Create a default storage class without any configuration
 * const storage = new ThirdwebStorage();
 *
 * // Upload any file or JSON object
 * const uri = await storage.upload(data);
 * const result = await storage.download(uri);
 *
 * // Or configure a custom uploader, downloader, and gateway URLs
 * const gatewayUrls = {
 *   // We define a mapping of schemes to gateway URLs
 *   "ipfs://": [
 *     "https://gateway.ipfscdn.io/ipfs/",
 *     "https://cloudflare-ipfs.com/ipfs/",
 *     "https://ipfs.io/ipfs/",
 *   ],
 * };
 * const downloader = new StorageDownloader();
 * const uploader = new IpfsUploader();
 * const storage = new ThirdwebStorage({ uploader, downloader, gatewayUrls });
 * ```
 *
 * @public
 */

class ThirdwebStorage {
  constructor(options) {
    _defineProperty(this, "uploader", void 0);

    _defineProperty(this, "downloader", void 0);

    _defineProperty(this, "gatewayUrls", void 0);

    this.uploader = (options === null || options === void 0 ? void 0 : options.uploader) || new IpfsUploader();
    this.downloader = (options === null || options === void 0 ? void 0 : options.downloader) || new StorageDownloader();
    this.gatewayUrls = prepareGatewayUrls(options === null || options === void 0 ? void 0 : options.gatewayUrls);
  }
  /**
   * Resolve any scheme on a URL to get a retrievable URL for the data
   *
   * @param url - The URL to resolve the scheme of
   * @returns The URL with its scheme resolved
   *
   * @example
   * ```jsx
   * const uri = "ipfs://example";
   * const url = storage.resolveScheme(uri);
   * console.log(url);
   * ```
   */


  resolveScheme(url) {
    return replaceSchemeWithGatewayUrl(url, this.gatewayUrls);
  }
  /**
   * Downloads arbitrary data from any URL scheme.
   *
   * @param url - The URL of the data to download
   * @returns The response object fetched from the resolved URL
   *
   * @example
   * ```jsx
   * const uri = "ipfs://example";
   * const data = await storage.download(uri);
   * ```
   */


  async download(url) {
    return this.downloader.download(url, this.gatewayUrls);
  }
  /**
   * Downloads JSON data from any URL scheme.
   * Resolves any URLs with schemes to retrievable gateway URLs.
   *
   * @param url - The URL of the JSON data to download
   * @returns The JSON data fetched from the resolved URL
   *
   * @example
   * ```jsx
   * const uri = "ipfs://example";
   * const json = await storage.downloadJSON(uri);
   * ```
   */


  async downloadJSON(url) {
    const res = await this.download(url); // If we get a JSON object, recursively replace any schemes with gatewayUrls

    const json = await res.json();
    return replaceObjectSchemesWithGatewayUrls(json, this.gatewayUrls);
  }
  /**
   * Upload arbitrary file or JSON data using the configured decentralized storage system.
   * Automatically uploads any file data within JSON objects and replaces them with hashes.
   *
   * @param data - Arbitrary file or JSON data to upload
   * @param options - Options to pass through to the storage uploader class
   * @returns - The URI of the uploaded data
   *
   * @example
   * ```jsx
   * // Upload file data
   * const file = readFileSync("../file.jpg");
   * const fileUri = await storage.upload(file);
   *
   * // Or upload a JSON object
   * const json = { name: "JSON", image: file };
   * const jsonUri = await storage.upload(json);
   * ```
   */


  async upload(data, options) {
    const [uri] = await this.uploadBatch([data], options);
    return uri;
  }
  /**
   * Batch upload arbitrary file or JSON data using the configured decentralized storage system.
   * Automatically uploads any file data within JSON objects and replaces them with hashes.
   *
   * @param data - Array of arbitrary file or JSON data to upload
   * @param options - Options to pass through to the storage uploader class
   * @returns - The URIs of the uploaded data
   *
   * @example
   * ```jsx
   * // Upload an array of file data
   * const files = [
   *  readFileSync("../file1.jpg"),
   *  readFileSync("../file2.jpg"),
   * ];
   * const fileUris = await storage.uploadBatch(files);
   *
   * // Upload an array of JSON objects
   * const objects = [
   *  { name: "JSON 1", image: files[0] },
   *  { name: "JSON 2", image: files[1] },
   * ];
   * const jsonUris = await storage.uploadBatch(objects);
   * ```
   */


  async uploadBatch(data, options) {
    data = data.filter(item => item !== undefined);

    if (!data.length) {
      return [];
    }

    const isFileArray = data.map(item => isFileOrBuffer(item) || typeof item === "string").every(item => !!item);
    let uris = []; // If data is an array of files, pass it through to upload directly

    if (isFileArray) {
      uris = await this.uploader.uploadBatch(data, options);
    } else {
      // Otherwise it is an array of JSON objects, so we have to prepare it first
      const metadata = (await this.uploadAndReplaceFilesWithHashes(data, options)).map(item => {
        if (typeof item === "string") {
          return item;
        }

        return JSON.stringify(item);
      });
      uris = await this.uploader.uploadBatch(metadata, options);
    }

    if (options !== null && options !== void 0 && options.uploadWithGatewayUrl || this.uploader.uploadWithGatewayUrl) {
      return uris.map(uri => this.resolveScheme(uri));
    } else {
      return uris;
    }
  }

  async uploadAndReplaceFilesWithHashes(data, options) {
    let cleaned = data; // Replace any gateway URLs with their hashes

    cleaned = replaceObjectGatewayUrlsWithSchemes(cleaned, this.gatewayUrls); // Recurse through data and extract files to upload

    const files = extractObjectFiles(cleaned);

    if (files.length) {
      // Upload all files that came from the object
      const uris = await this.uploader.uploadBatch(files, options); // Recurse through data and replace files with hashes

      cleaned = replaceObjectFilesWithUris(cleaned, uris);
    }

    if (options !== null && options !== void 0 && options.uploadWithGatewayUrl || this.uploader.uploadWithGatewayUrl) {
      // If flag is set, replace all schemes with their preferred gateway URL
      // Ex: used for Solana, where services don't resolve schemes for you, so URLs must be useable by default
      cleaned = replaceObjectSchemesWithGatewayUrls(cleaned, this.gatewayUrls);
    }

    return cleaned;
  }

}

/**
 * @internal
 */
class MockDownloader {
  constructor(storage) {
    _defineProperty(this, "gatewayUrls", DEFAULT_GATEWAY_URLS);

    _defineProperty(this, "storage", void 0);

    this.storage = storage;
  }

  async download(url) {
    const [cid, name] = url.replace("mock://", "").split("/");
    const data = this.storage[cid][name];
    return {
      async json() {
        return Promise.resolve(JSON.parse(data));
      },

      async text() {
        return Promise.resolve(data);
      }

    };
  }

}

/**
 * @internal
 */

class MockUploader {
  constructor(storage) {
    _defineProperty(this, "storage", void 0);

    this.storage = storage;
  }

  async uploadBatch(data, options) {
    var _options$rewriteFileN;

    const cid = uuid.v4();
    const uris = [];
    this.storage[cid] = {};
    let index = (options === null || options === void 0 ? void 0 : (_options$rewriteFileN = options.rewriteFileNames) === null || _options$rewriteFileN === void 0 ? void 0 : _options$rewriteFileN.fileStartNumber) || 0;

    for (const file of data) {
      let contents;

      if (isFileInstance(file)) {
        contents = await file.text();
      } else if (isBufferInstance(file)) {
        contents = file.toString();
      } else if (typeof file === "string") {
        contents = file;
      } else {
        contents = isBufferInstance(file.data) ? file.data.toString() : file.data;
        const name = file.name ? file.name : `file_${index}`;
        this.storage[cid][name] = contents;
        uris.push(`mock://${cid}/${name}`);
        continue;
      }

      this.storage[cid][index.toString()] = contents;
      uris.push(`mock://${cid}/${index}`);
      index += 1;
    }

    return uris;
  }

}

exports.DEFAULT_GATEWAY_URLS = DEFAULT_GATEWAY_URLS;
exports.IpfsUploader = IpfsUploader;
exports.MockDownloader = MockDownloader;
exports.MockUploader = MockUploader;
exports.PINATA_IPFS_URL = PINATA_IPFS_URL;
exports.StorageDownloader = StorageDownloader;
exports.TW_IPFS_SERVER_URL = TW_IPFS_SERVER_URL;
exports.ThirdwebStorage = ThirdwebStorage;
exports.extractObjectFiles = extractObjectFiles;
exports.isBrowser = isBrowser;
exports.isBufferInstance = isBufferInstance;
exports.isBufferOrStringWithName = isBufferOrStringWithName;
exports.isFileBufferOrStringEqual = isFileBufferOrStringEqual;
exports.isFileInstance = isFileInstance;
exports.isFileOrBuffer = isFileOrBuffer;
exports.prepareGatewayUrls = prepareGatewayUrls;
exports.replaceGatewayUrlWithScheme = replaceGatewayUrlWithScheme;
exports.replaceObjectFilesWithUris = replaceObjectFilesWithUris;
exports.replaceObjectGatewayUrlsWithSchemes = replaceObjectGatewayUrlsWithSchemes;
exports.replaceObjectSchemesWithGatewayUrls = replaceObjectSchemesWithGatewayUrls;
exports.replaceSchemeWithGatewayUrl = replaceSchemeWithGatewayUrl;
