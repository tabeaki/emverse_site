import { QueryAllParams } from "../../../core/schema/QueryParams";
import { NFT, NFTMetadata, NFTMetadataOrUri } from "../../../core/schema/nft";
import { BaseERC721 } from "../../types/eips";
import { ClaimOptions, UploadProgressEvent } from "../../types/index";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { UpdateableNetwork } from "../interfaces/contract";
import { NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Erc721WithQuantitySignatureMintable } from "./erc-721-with-quantity-signature-mintable";
import type { DropERC721, Multiwrap, SignatureDrop, TokenERC721 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish } from "ethers";
/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.transfer(walletAddress, tokenId);
 * ```
 * @public
 */
export declare class Erc721<T extends Multiwrap | SignatureDrop | DropERC721 | TokenERC721 | BaseERC721 = BaseERC721> implements UpdateableNetwork, DetectableFeature {
    featureName: "ERC721";
    private query;
    private mintable;
    private burnable;
    private lazyMintable;
    private signatureMintable;
    protected contractWrapper: ContractWrapper<T>;
    protected storage: ThirdwebStorage;
    private _chainId;
    get chainId(): number;
    constructor(contractWrapper: ContractWrapper<T>, storage: ThirdwebStorage, chainId: number);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /**
     * Get a single NFT Metadata
     *
     * @example
     * ```javascript
     * const tokenId = 0;
     * const nft = await contract.erc721.get(tokenId);
     * ```
     * @param tokenId - the tokenId of the NFT to retrieve
     * @returns The NFT metadata
     * @twfeature ERC721
     */
    get(tokenId: BigNumberish): Promise<NFT>;
    /**
     * Get the current owner of a given NFT within this Contract
     *
     * @param tokenId - the tokenId of the NFT
     * @returns the address of the owner
     * @twfeature ERC721
     */
    ownerOf(tokenId: BigNumberish): Promise<string>;
    /**
     * Get NFT Balance
     *
     * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const balance = await contract.erc721.balanceOf(walletAddress);
     * console.log(balance);
     * ```
     * @twfeature ERC721
     */
    balanceOf(address: string): Promise<BigNumber>;
    /**
     * Get NFT Balance for the currently connected wallet
     */
    balance(): Promise<BigNumber>;
    /**
     * Get whether this wallet has approved transfers from the given operator
     * @param address - the wallet address
     * @param operator - the operator address
     */
    isApproved(address: string, operator: string): Promise<boolean>;
    /**
     * Transfer a single NFT
     *
     * @remarks Transfer an NFT from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.erc721.transfer(walletAddress, tokenId);
     * ```
     * @twfeature ERC721
     */
    transfer(to: string, tokenId: BigNumberish): Promise<TransactionResult>;
    /**
     * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     *
     * @internal
     */
    setApprovalForAll(operator: string, approved: boolean): Promise<TransactionResult>;
    /**
     * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
     * @param operator - the operator's address
     * @param tokenId - the tokenId to give approval for
     *
     * @internal
     */
    setApprovalForToken(operator: string, tokenId: BigNumberish): Promise<TransactionResult>;
    /**
     * Get All Minted NFTs
     *
     * @remarks Get all the data associated with every NFT in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const nfts = await contract.erc721.getAll();
     * console.log(nfts);
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     * @twfeature ERC721Supply
     */
    getAll(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get All owners of minted NFTs on this contract
     * @returns an array of token ids and owners
     * @twfeature ERC721Supply
     */
    getAllOwners(): Promise<{
        tokenId: number;
        owner: string;
    }[]>;
    /**
     * Get the number of NFTs minted
     * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
     *
     * @returns the total number of NFTs minted in this contract
     * @public
     */
    totalCount(): Promise<BigNumber>;
    /**
     * Get the total count NFTs minted in this contract
     */
    totalCirculatingSupply(): Promise<BigNumber>;
    /**
     * Get Owned NFTs
     *
     * @remarks Get all the data associated with the NFTs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the NFTs of
     * const address = "{{wallet_address}}";
     * const nfts = await contract.erc721.getOwned(address);
     * console.log(nfts);
     * ```
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     * @returns The NFT metadata for all NFTs in the contract.
     * @twfeature ERC721Enumerable
     */
    getOwned(walletAddress?: string): Promise<NFT[]>;
    /**
     * Get all token ids of NFTs owned by a specific wallet.
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     */
    getOwnedTokenIds(walletAddress?: string): Promise<BigNumber[]>;
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to the connected wallet.
     *
     * @example
     * ```javascript
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.erc721.mint(metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     * @twfeature ERC721Mintable
     */
    mint(metadata: NFTMetadataOrUri): Promise<TransactionResultWithId<NFT>>;
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.erc721.mintTo(walletAddress, metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     * @twfeature ERC721Mintable
     */
    mintTo(receiver: string, metadata: NFTMetadataOrUri): Promise<TransactionResultWithId<NFT>>;
    /**
     * Mint Many unique NFTs
     *
     * @remarks Mint many unique NFTs at once to the connected wallet
     *
     * @example
     * ```javascript*
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.erc721.mintBatch(metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     * @twfeature ERC721BatchMintable
     */
    mintBatch(metadatas: NFTMetadataOrUri[]): Promise<TransactionResultWithId<NFT>[]>;
    /**
     * Mint Many unique NFTs
     *
     * @remarks Mint many unique NFTs at once to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.erc721.mintBatchTo(walletAddress, metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     * @twfeature ERC721BatchMintable
     */
    mintBatchTo(receiver: string, metadatas: NFTMetadataOrUri[]): Promise<TransactionResultWithId<NFT>[]>;
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     *
     * @example
     * ```javascript
     * const result = await contract.erc721.burn(tokenId);
     * ```
     * @twfeature ERC721Burnable
     */
    burn(tokenId: BigNumberish): Promise<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>;
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
     * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
     * const firstTokenId = results[0].id; // token id of the first created NFT
     * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
     * ```
     *
     * @param metadatas - The metadata to include in the batch.
     * @param options - optional upload progress callback
     * @twfeature ERC721LazyMintable
     */
    lazyMint(metadatas: NFTMetadataOrUri[], options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<TransactionResultWithId<{
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: string | null | undefined;
        external_url?: string | null | undefined;
        animation_url?: string | null | undefined;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        id: string;
        uri: string;
    }>[]>;
    /**
     * Claim unique NFTs to the connected wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.erc721.claim(quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param quantity - Quantity of the tokens you want to claim
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     * @twfeature ERC721Claimable
     */
    claim(quantity: BigNumberish, options?: ClaimOptions): Promise<TransactionResultWithId<NFT>[]>;
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
     * const tx = await contract.erc721.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param options
     * @twfeature ERC721Claimable
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    claimTo(destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions): Promise<TransactionResultWithId<NFT>[]>;
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress
     * @param quantity
     * @param options
     */
    getClaimTransaction(destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions): Promise<import("./TransactionTask").TransactionTask>;
    totalClaimedSupply(): Promise<BigNumber>;
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
    totalUnclaimedSupply(): Promise<BigNumber>;
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
     * await contract.erc721.claimConditions.set(claimConditions);
     * ```
     * @twfeature ERC721ClaimableWithConditions
     */
    get claimConditions(): import("./drop-claim-conditions").DropClaimConditions<import("../../types/eips").BaseClaimConditionERC721>;
    /**
     * Signature Minting
     * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.erc721.signature.generate()` documentation
     * const signedPayload = contract.erc721.signature().generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = contract.erc721.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * const mintedId = tx.id; // the id of the NFT minted
     * ```
     * @twfeature ERC721SignatureMint
     */
    get signature(): Erc721WithQuantitySignatureMintable;
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
     * await contract.erc721.revealer.createDelayedRevealBatch(
     *   placeholderNFT,
     *   realNFTs,
     *   "my secret password",
     * );
     * // Whenever you're ready, reveal your NFTs at any time
     * const batchId = 0; // the batch to reveal
     * await contract.erc721.revealer.reveal(batchId, "my secret password");
     * ```
     * @twfeature ERC721Revealable
     */
    get revealer(): import("./delayed-reveal").DelayedReveal<import("../../types/eips").BaseDelayedRevealERC721>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * @internal
     */
    getTokenMetadata(tokenId: BigNumberish): Promise<NFTMetadata>;
    /**
     * Return the next available token ID to mint
     * @internal
     */
    nextTokenIdToMint(): Promise<BigNumber>;
    private detectErc721Enumerable;
    private detectErc721Mintable;
    private detectErc721Burnable;
    private detectErc721LazyMintable;
    private detectErc721SignatureMintable;
}
//# sourceMappingURL=erc-721.d.ts.map