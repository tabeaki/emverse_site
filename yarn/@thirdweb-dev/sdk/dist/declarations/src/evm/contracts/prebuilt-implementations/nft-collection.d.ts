import { NFT, NFTMetadataOrUri } from "../../../core/schema/nft";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractOwner } from "../../core/classes/contract-owner";
import { ContractPlatformFee } from "../../core/classes/contract-platform-fee";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractRoyalty } from "../../core/classes/contract-royalty";
import { ContractPrimarySale } from "../../core/classes/contract-sales";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { Erc721 } from "../../core/classes/erc-721";
import { StandardErc721 } from "../../core/classes/erc-721-standard";
import { Erc721WithQuantitySignatureMintable } from "../../core/classes/erc-721-with-quantity-signature-mintable";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import type { NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../../core/types";
import { TokenErc721ContractSchema } from "../../schema/contracts/token-erc721";
import type { TokenERC721 } from "@thirdweb-dev/contracts-js";
import type ABI from "@thirdweb-dev/contracts-js/dist/abis/TokenERC721.json";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumberish, CallOverrides } from "ethers";
/**
 * Create a collection of one-of-one NFTs.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "nft-collection");
 * ```
 *
 * @public
 */
export declare class NFTCollection extends StandardErc721<TokenERC721> {
    static contractRoles: readonly ["admin", "minter", "transfer"];
    abi: typeof ABI;
    metadata: ContractMetadata<TokenERC721, typeof TokenErc721ContractSchema>;
    roles: ContractRoles<TokenERC721, typeof NFTCollection.contractRoles[number]>;
    encoder: ContractEncoder<TokenERC721>;
    estimator: GasCostEstimator<TokenERC721>;
    events: ContractEvents<TokenERC721>;
    sales: ContractPrimarySale<TokenERC721>;
    platformFees: ContractPlatformFee<TokenERC721>;
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
    royalties: ContractRoyalty<TokenERC721, typeof TokenErc721ContractSchema>;
    owner: ContractOwner<TokenERC721>;
    /**
     * Signature Minting
     * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
     * const signedPayload = contract.signature().generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = contract.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * const mintedId = tx.id; // the id of the NFT minted
     * ```
     */
    signature: Erc721WithQuantitySignatureMintable;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<TokenERC721>;
    erc721: Erc721<TokenERC721>;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage, options: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined, abi: typeof ABI, chainId: number, contractWrapper?: ContractWrapper<TokenERC721>);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get whether users can transfer NFTs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to a specified wallet.
     *
     * @example
     * ```javascript*
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.mint(metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
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
     * const tx = await contract.mintTo(walletAddress, metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    mintTo(walletAddress: string, metadata: NFTMetadataOrUri): Promise<TransactionResultWithId<NFT>>;
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
     * const tx = await contract.mintBatch(metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    mintBatch(metadata: NFTMetadataOrUri[]): Promise<TransactionResultWithId<NFT>[]>;
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
     * const tx = await contract.mintBatchTo(walletAddress, metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    mintBatchTo(walletAddress: string, metadata: NFTMetadataOrUri[]): Promise<TransactionResultWithId<NFT>[]>;
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burnToken(tokenId);
     * ```
     */
    burn(tokenId: BigNumberish): Promise<TransactionResult>;
    /**
     * @internal
     */
    call(functionName: string, ...args: unknown[] | [...unknown[], CallOverrides]): Promise<any>;
}
//# sourceMappingURL=nft-collection.d.ts.map