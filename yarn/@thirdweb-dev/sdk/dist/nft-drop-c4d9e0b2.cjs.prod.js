'use strict';

var QueryParams = require('./QueryParams-f109bfd0.cjs.prod.js');
var paperXyz = require('./paper-xyz-4d5e3fed.cjs.prod.js');
var ethers = require('ethers');
require('bn.js');
require('zod');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
require('tiny-invariant');
require('eventemitter3');
require('cross-fetch');
require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/SignatureMintERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/DelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/DropSinglePhase1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
require('bs58');
require('cbor-x');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
require('merkletreejs');
require('fast-deep-equal');
require('uuid');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWFactory.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json');
require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
require('@thirdweb-dev/storage');
require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');

/**
 * Setup a collection of one-of-one NFTs that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "nft-drop");
 * ```
 *
 * @public
 */

class NFTDrop extends paperXyz.StandardErc721 {
  /**
   * @internal
   */

  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.claimConditions.set(claimConditions);
   * ```
   */

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.revealer.reveal(batchId, "my secret password");
   * ```
   */

  /**
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
   */
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new paperXyz.ContractWrapper(network, address, abi, options);
    super(contractWrapper, storage, chainId);

    QueryParams._defineProperty(this, "abi", void 0);

    QueryParams._defineProperty(this, "encoder", void 0);

    QueryParams._defineProperty(this, "estimator", void 0);

    QueryParams._defineProperty(this, "metadata", void 0);

    QueryParams._defineProperty(this, "sales", void 0);

    QueryParams._defineProperty(this, "platformFees", void 0);

    QueryParams._defineProperty(this, "events", void 0);

    QueryParams._defineProperty(this, "roles", void 0);

    QueryParams._defineProperty(this, "interceptor", void 0);

    QueryParams._defineProperty(this, "royalties", void 0);

    QueryParams._defineProperty(this, "claimConditions", void 0);

    QueryParams._defineProperty(this, "revealer", void 0);

    QueryParams._defineProperty(this, "checkout", void 0);

    QueryParams._defineProperty(this, "erc721", void 0);

    QueryParams._defineProperty(this, "owner", void 0);

    this.abi = abi;
    this.metadata = new paperXyz.ContractMetadata(this.contractWrapper, paperXyz.DropErc721ContractSchema, this.storage);
    this.roles = new paperXyz.ContractRoles(this.contractWrapper, NFTDrop.contractRoles);
    this.royalties = new paperXyz.ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new paperXyz.ContractPrimarySale(this.contractWrapper);
    this.claimConditions = new paperXyz.DropClaimConditions(this.contractWrapper, this.metadata, this.storage);
    this.encoder = new paperXyz.ContractEncoder(this.contractWrapper);
    this.estimator = new paperXyz.GasCostEstimator(this.contractWrapper);
    this.events = new paperXyz.ContractEvents(this.contractWrapper);
    this.platformFees = new paperXyz.ContractPlatformFee(this.contractWrapper);
    this.erc721 = new paperXyz.Erc721(this.contractWrapper, this.storage, chainId);
    this.revealer = new paperXyz.DelayedReveal(this.contractWrapper, this.storage, paperXyz.FEATURE_NFT_REVEALABLE.name, () => this.erc721.nextTokenIdToMint());
    this.interceptor = new paperXyz.ContractInterceptor(this.contractWrapper);
    this.owner = new paperXyz.ContractOwner(this.contractWrapper);
    this.checkout = new paperXyz.PaperCheckout(this.contractWrapper);
  }
  /**
   * @internal
   */


  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total count NFTs in this drop contract, both claimed and unclaimed
   */


  async totalSupply() {
    const claimed = await this.totalClaimedSupply();
    const unclaimed = await this.totalUnclaimedSupply();
    return claimed.add(unclaimed);
  }
  /**
   * Get All Claimed NFTs
   *
   * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTs = await contract.getAllClaimed();
   * const firstOwner = claimedNFTs[0].owner;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata and their ownersfor all NFTs queried.
   */


  async getAllClaimed(queryParams) {
    const start = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.start) || 0).toNumber();
    const count = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.count) || QueryParams.DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxId = Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(), start + count);
    return await Promise.all(Array.from(Array(maxId).keys()).map(i => this.get(i.toString())));
  }
  /**
   * Get All Unclaimed NFTs
   *
   * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTs = await contract.getAllUnclaimed();
   * const firstUnclaimedNFT = unclaimedNFTs[0].name;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */


  async getAllUnclaimed(queryParams) {
    const start = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.start) || 0).toNumber();
    const count = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.count) || QueryParams.DEFAULT_QUERY_ALL_COUNT).toNumber();
    const firstTokenId = ethers.BigNumber.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(), start));
    const maxId = ethers.BigNumber.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(), firstTokenId.toNumber() + count));
    return await Promise.all(Array.from(Array(maxId.sub(firstTokenId).toNumber()).keys()).map(i => this.erc721.getTokenMetadata(firstTokenId.add(i).toString())));
  }
  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
   * ```
   * @returns the unclaimed supply
   */


  async totalClaimedSupply() {
    return this.erc721.totalClaimedSupply();
  }
  /**
   * Get the unclaimed supply
   *
   * @remarks Get the number of unclaimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
   * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
   * ```
   * @returns the unclaimed supply
   */


  async totalUnclaimedSupply() {
    return this.erc721.totalUnclaimedSupply();
  }
  /**
   * Get whether users can transfer NFTs from this contract
   */


  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole(paperXyz.getRoleHash("transfer"), ethers.constants.AddressZero);
    return !anyoneCanTransfer;
  }
  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create a batch of unique NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */


  async createBatch(metadatas, options) {
    const startFileNumber = await this.contractWrapper.readContract.nextTokenIdToMint();
    const batch = await paperXyz.uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options); // ensure baseUri is the same for the entire batch

    const baseUri = batch[0].substring(0, batch[0].lastIndexOf("/"));

    for (let i = 0; i < batch.length; i++) {
      const uri = batch[i].substring(0, batch[i].lastIndexOf("/"));

      if (baseUri !== uri) {
        throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
      }
    }

    const receipt = await this.contractWrapper.sendTransaction("lazyMint", [batch.length, baseUri.endsWith("/") ? baseUri : `${baseUri}/`, ethers.ethers.utils.toUtf8Bytes("")]);
    const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt === null || receipt === void 0 ? void 0 : receipt.logs);
    const startingIndex = event[0].args.startTokenId;
    const endingIndex = event[0].args.endTokenId;
    const results = [];

    for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt,
        data: () => this.erc721.getTokenMetadata(id)
      });
    }

    return results;
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress
   * @param quantity
   * @param checkERC20Allowance
   */


  async getClaimTransaction(destinationAddress, quantity) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc721.getClaimTransaction(destinationAddress, quantity, {
      checkERC20Allowance
    });
  }
  /**
   * Claim unique NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */


  async claimTo(destinationAddress, quantity) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc721.claimTo(destinationAddress, quantity, {
      checkERC20Allowance
    });
  }
  /**
   * Claim NFTs to the connected wallet.
   *
   * @remarks See {@link NFTDrop.claimTo}
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */


  async claim(quantity) {
    let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return this.claimTo(await this.contractWrapper.getSignerAddress(), quantity, checkERC20Allowance);
  }
  /**
   * Burn a single NFT
   *
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.burnToken(tokenId);
   * ```
   *
   */


  async burn(tokenId) {
    return this.erc721.burn(tokenId);
  }
  /******************************
   * STANDARD ERC721 FUNCTIONS
   ******************************/

  /**
   * Get a single NFT Metadata
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */


  async get(tokenId) {
    return this.erc721.get(tokenId);
  }
  /**
   * Get the current owner of a given NFT within this Contract
   *
   * @param tokenId - the tokenId of the NFT
   * @returns the address of the owner
   */


  async ownerOf(tokenId) {
    return this.erc721.ownerOf(tokenId);
  }
  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   */


  async balanceOf(address) {
    return this.erc721.balanceOf(address);
  }
  /**
   * Get NFT Balance for the currently connected wallet
   */


  async balance() {
    return this.erc721.balance();
  }
  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */


  async isApproved(address, operator) {
    return this.erc721.isApproved(address, operator);
  }
  /**
   * Transfer a single NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.transfer(walletAddress, tokenId);
   * ```
   */


  async transfer(to, tokenId) {
    return this.erc721.transfer(to, tokenId);
  }
  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */


  async setApprovalForAll(operator, approved) {
    return this.erc721.setApprovalForAll(operator, approved);
  }
  /**
   * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
   * @param operator - the operator's address
   * @param tokenId - the tokenId to give approval for
   *
   * @internal
   */


  async setApprovalForToken(operator, tokenId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("approve", [operator, tokenId])
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * @internal
   */


  async call(functionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return this.contractWrapper.call(functionName, ...args);
  }

}

QueryParams._defineProperty(NFTDrop, "contractRoles", ["admin", "minter", "transfer"]);

exports.NFTDrop = NFTDrop;
