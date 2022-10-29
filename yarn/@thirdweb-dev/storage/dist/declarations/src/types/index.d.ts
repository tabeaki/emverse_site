import { GatewayUrls, IStorageDownloader } from "./download";
import { IStorageUploader, UploadOptions } from "./upload";
export declare type ThirdwebStorageOptions<T extends UploadOptions> = {
    uploader?: IStorageUploader<T>;
    downloader?: IStorageDownloader;
    gatewayUrls?: GatewayUrls;
};
export * from "./upload";
export * from "./download";
export * from "./data";
//# sourceMappingURL=index.d.ts.map