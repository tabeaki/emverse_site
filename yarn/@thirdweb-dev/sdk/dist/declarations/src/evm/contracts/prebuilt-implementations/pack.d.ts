import { QueryAllParams } from "../../../core/schema/QueryParams";
import { NFT } from "../../../core/schema/nft";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractOwner } from "../../core/classes/contract-owner";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractRoyalty } from "../../core/classes/contract-royalty";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { Erc1155 } from "../../core/classes/erc-1155";
import { StandardErc1155 } from "../../core/classes/erc-1155-standard";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { NetworkOrSignerOrProvider, TransactionResultWithId } from "../../core/types";
import { PackContractSchema } from "../../schema/contracts/packs";
import { PackMetadataInput, PackRewards, PackRewardsOutput } from "../../schema/tokens/pack";
import type { Pack as PackContract } from "@thirdweb-dev/contracts-js";
import type ABI from "@thirdweb-dev/contracts-js/dist/abis/Pack.json";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish, CallOverrides, ethers } from "ethers";
/**
 * Create lootboxes of NFTs with rarity based open mechanics.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "pack");
 * ```
 *
 * @public
 */
export declare class Pack extends StandardErc1155<PackContract> {
    static contractRoles: readonly ["admin", "minter", "asset", "transfer"];
    abi: typeof ABI;
    metadata: ContractMetadata<PackContract, typeof PackContractSchema>;
    roles: ContractRoles<PackContract, typeof Pack.contractRoles[number]>;
    encoder: ContractEncoder<PackContract>;
    events: ContractEvents<PackContract>;
    estimator: GasCostEstimator<PackContract>;
    /**
     * Configure royalties
     * @remarks Set your own royalties for the entire contract or per pack
     * @example
     * ```javascript
     * // royalties on the whole contract
     * contract.royalties.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1%
     *   fee_recipient: "0x..."
     * });
     * // override royalty for a particular pack
     * contract.royalties.setTokenRoyaltyInfo(packId, {
     *   seller_fee_basis_points: 500, // 5%
     *   fee_recipient: "0x..."
     * });
     * ```
     */
    royalties: ContractRoyalty<PackContract, typeof PackContractSchema>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<PackContract>;
    erc1155: Erc1155<PackContract>;
    owner: ContractOwner<PackContract>;
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
    } | undefined, abi: typeof ABI, chainId: number, contractWrapper?: ContractWrapper<PackContract>);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get a single Pack
     *
     * @remarks Get all the data associated with every pack in this contract.
     *
     * By default, returns the first 100 packs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const pack = await contract.get(0);
     * console.log(packs;
     * ```
     */
    get(tokenId: BigNumberish): Promise<NFT>;
    /**
     * Get All Packs
     *
     * @remarks Get all the data associated with every pack in this contract.
     *
     * By default, returns the first 100 packs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const packs = await contract.getAll();
     * console.log(packs;
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The pack metadata for all packs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get Owned Packs
     *
     * @remarks Get all the data associated with the packs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the packs of
     * const address = "{{wallet_address}}";
     * const packss = await contract.getOwned(address);
     * ```
     *
     * @returns The pack metadata for all the owned packs in the contract.
     */
    getOwned(walletAddress?: string): Promise<NFT[]>;
    /**
     * Get the number of packs created
     * @returns the total number of packs minted in this contract
     * @public
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get whether users can transfer packs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /**
     * Get Pack Contents
     * @remarks Get the rewards contained inside a pack.
     *
     * @param packId - The id of the pack to get the contents of.
     * @returns - The contents of the pack.
     *
     * @example
     * ```javascript
     * const packId = 0;
     * const contents = await contract.getPackContents(packId);
     * console.log(contents.erc20Rewards);
     * console.log(contents.erc721Rewards);
     * console.log(contents.erc1155Rewards);
     * ```
     */
    getPackContents(packId: BigNumberish): Promise<PackRewardsOutput>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Pack
     * @remarks Create a new pack with the given metadata and rewards and mint it to the connected wallet.
     * @remarks See {@link Pack.createTo}
     *
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.create(pack);
     * ```
     */
    create(metadataWithRewards: PackMetadataInput): Promise<TransactionResultWithId<NFT>>;
    /**
     * Add Pack Contents
     * @remarks Add contents to an existing pack.
     * @remarks See {@link Pack.addPackContents}
     *
     * @param packId - token Id of the pack to add contents to
     * @param packContents - the rewards to include in the pack
     * @example
     * ```javascript
     * const packContents = {
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     * }
     *
     * const tx = await contract.addPackContents(packId, packContents);
     * ```
     */
    addPackContents(packId: BigNumberish, packContents: PackRewards): Promise<{
        id: BigNumber;
        receipt: ethers.providers.TransactionReceipt;
        data: () => Promise<NFT>;
    }>;
    /**
     * Create Pack To Wallet
     * @remarks Create a new pack with the given metadata and rewards and mint it to the specified address.
     *
     * @param to - the address to mint the pack to
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     *
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.createTo("0x...", pack);
     * ```
     */
    createTo(to: string, metadataWithRewards: PackMetadataInput): Promise<TransactionResultWithId<NFT>>;
    /**
     * Open Pack
     *
     * @remarks - Open a pack to reveal the contained rewards. This will burn the specified pack and
     * the contained assets will be transferred to the opening users wallet.
     *
     * @param tokenId - the token ID of the pack you want to open
     * @param amount - the amount of packs you want to open
     *
     * @example
     * ```javascript
     * const tokenId = 0
     * const amount = 1
     * const tx = await contract.open(tokenId, amount);
     * ```
     */
    open(tokenId: BigNumberish, amount?: BigNumberish): Promise<PackRewards>;
    /** *****************************
     * PRIVATE FUNCTIONS
     *******************************/
    private toPackContentArgs;
    /**
     * @internal
     */
    call(functionName: string, ...args: unknown[] | [...unknown[], CallOverrides]): Promise<any>;
}
//# sourceMappingURL=pack.d.ts.map