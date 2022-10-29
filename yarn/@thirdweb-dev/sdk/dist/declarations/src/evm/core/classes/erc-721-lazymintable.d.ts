import { NFTMetadata, NFTMetadataOrUri } from "../../../core/schema/nft";
import { UploadProgressEvent } from "../../types";
import { BaseDelayedRevealERC721, BaseDropERC721 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { DelayedReveal } from "./delayed-reveal";
import { Erc721 } from "./erc-721";
import { Erc721Claimable } from "./erc-721-claimable";
import { Erc721ClaimableWithConditions } from "./erc-721-claimable-with-conditions";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * Lazily mint and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.drop.claim(quantity);
 * ```
 */
export declare class Erc721LazyMintable implements DetectableFeature {
    featureName: "ERC721LazyMintable";
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
     * await contract.nft.drop.revealer.createDelayedRevealBatch(
     *   placeholderNFT,
     *   realNFTs,
     *   "my secret password",
     * );
     * // Whenever you're ready, reveal your NFTs at any time
     * const batchId = 0; // the batch to reveal
     * await contract.erc721.revealer.reveal(batchId, "my secret password");
     * ```
     */
    revealer: DelayedReveal<BaseDelayedRevealERC721> | undefined;
    /**
     * Claim tokens and configure claim conditions
     * @remarks Let users claim NFTs. Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const quantity = 10;
     * await contract.erc721.claim(quantity);
     * ```
     */
    claimWithConditions: Erc721ClaimableWithConditions | undefined;
    claim: Erc721Claimable | undefined;
    private contractWrapper;
    private erc721;
    private storage;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<BaseDropERC721>, storage: ThirdwebStorage);
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
     */
    lazyMint(metadatas: NFTMetadataOrUri[], options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<TransactionResultWithId<NFTMetadata>[]>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private detectErc721Revealable;
    private detectErc721ClaimableWithConditions;
    private detectErc721Claimable;
}
//# sourceMappingURL=erc-721-lazymintable.d.ts.map