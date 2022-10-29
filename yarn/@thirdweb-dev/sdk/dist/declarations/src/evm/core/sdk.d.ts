import { ChainOrRpc } from "../constants";
import { SmartContract } from "../contracts/smart-contract";
import { SDKOptions } from "../schema/sdk-options";
import { CurrencyValue } from "../types/index";
import { WalletAuthenticator } from "./auth/wallet-authenticator";
import { ContractDeployer } from "./classes/contract-deployer";
import { ContractPublisher } from "./classes/contract-publisher";
import { RPCConnectionHandler } from "./classes/rpc-connection-handler";
import type { ContractForPrebuiltContractType, ContractType, NetworkOrSignerOrProvider, PrebuiltContractType, SignerOrProvider } from "./types";
import { UserWallet } from "./wallet/UserWallet";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ContractInterface, ethers, Signer } from "ethers";
/**
 * The main entry point for the thirdweb SDK
 * @public
 */
export declare class ThirdwebSDK extends RPCConnectionHandler {
    /**
     * Get an instance of the thirdweb SDK based on an existing ethers signer
     *
     * @example
     * ```javascript
     * // get a signer from somewhere (createRandom is being used purely for example purposes)
     * const signer = ethers.Wallet.createRandom();
     *
     * // get an instance of the SDK with the signer already setup
     * const sdk = ThirdwebSDK.fromSigner(signer, "mainnet");
     * ```
     *
     * @param signer - a ethers Signer to be used for transactions
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @returns an instance of the SDK
     * @param storage - optional storage implementation to use
     *
     * @beta
     */
    static fromSigner(signer: Signer, network?: ChainOrRpc, options?: SDKOptions, storage?: ThirdwebStorage): ThirdwebSDK;
    /**
     * Get an instance of the thirdweb SDK based on a private key.
     *
     * @remarks
     * This should only be used for backend services or scripts, with the private key stored in a secure way.
     * **NEVER** expose your private key to the public in any way.
     *
     * @example
     * ```javascript
     * const sdk = ThirdwebSDK.fromPrivateKey("SecretPrivateKey", "mainnet");
     * ```
     *
     * @param privateKey - the private key - **DO NOT EXPOSE THIS TO THE PUBLIC**
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @param storage - optional storage implementation to use
     * @returns an instance of the SDK
     *
     * @beta
     */
    static fromPrivateKey(privateKey: string, network: ChainOrRpc, options?: SDKOptions, storage?: ThirdwebStorage): ThirdwebSDK;
    /**
     * @internal
     * the cache of contracts that we have already seen
     */
    private contractCache;
    /**
     * @internal
     * should never be accessed directly, use {@link ThirdwebSDK.getPublisher} instead
     */
    private _publisher;
    /**
     * Internal handler for uploading and downloading files
     */
    private storageHandler;
    /**
     * New contract deployer
     */
    deployer: ContractDeployer;
    /**
     * Interact with the connected wallet
     */
    wallet: UserWallet;
    /**
     * Upload and download files from IPFS or from your own storage service
     */
    storage: ThirdwebStorage;
    /**
     * Enable authentication with the connected wallet
     */
    auth: WalletAuthenticator;
    constructor(network: ChainOrRpc | SignerOrProvider, options?: SDKOptions, storage?: ThirdwebStorage);
    /**
     * Get an instance of a NFT Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const dropContract = await sdk.getDropContract("0x1234...");
     * + const dropContract = await sdk.getContract("0x1234...", "nft-drop");
     * ```
     */
    getNFTDrop(contractAddress: string): Promise<import("..").NFTDrop>;
    /**
     * Get an instance of a Signature Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const signatureDrop = await sdk.getSignatureDrop("0x1234...");
     * + const signatureDrop = await sdk.getContract("0x1234...", "signature-drop");
     * ```
     */
    getSignatureDrop(contractAddress: string): Promise<import("..").SignatureDrop>;
    /**
     * Get an instance of a NFT Collection Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const signatureDrop = await sdk.getNFTCollection("0x1234...");
     * + const signatureDrop = await sdk.getContract("0x1234...", "nft-collection");
     * ```
     */
    getNFTCollection(contractAddress: string): Promise<import("..").NFTCollection>;
    /**
     * Get an instance of a Edition Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const editionDrop = await sdk.getEditionDrop("0x1234...");
     * + const editionDrop = await sdk.getContract("0x1234...", "edition-drop");
     * ```
     */
    getEditionDrop(contractAddress: string): Promise<import("..").EditionDrop>;
    /**
     * Get an instance of a Edition contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const edition = await sdk.getEdition("0x1234...");
     * + const edition = await sdk.getContract("0x1234...", "edition");
     * ```
     */
    getEdition(contractAddress: string): Promise<import("..").Edition>;
    /**
     * Get an instance of a Token Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const tokenDrop = await sdk.getTokenDrop("0x1234...");
     * + const tokenDrop = await sdk.getContract("0x1234...", "token-drop");
     * ```
     */
    getTokenDrop(contractAddress: string): Promise<import("..").TokenDrop>;
    /**
     * Get an instance of a Token contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const token = await sdk.getToken("0x1234...");
     * + const token = await sdk.getContract("0x1234...", "token");
     * ```
     */
    getToken(contractAddress: string): Promise<import("..").Token>;
    /**
     * Get an instance of a Vote contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const vote = await sdk.getVote("0x1234...");
     * + const vote = await sdk.getContract("0x1234...", "vote");
     * ```
     */
    getVote(contractAddress: string): Promise<import("..").Vote>;
    /**
     * Get an instance of a Split contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const split = await sdk.getSplit("0x1234...");
     * + const split = await sdk.getContract("0x1234...", "split");
     * ```
     */
    getSplit(contractAddress: string): Promise<import("..").Split>;
    /**
     * Get an instance of a Marketplace contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const marketplace = await sdk.getMarketplace("0x1234...");
     * + const marketplace = await sdk.getContract("0x1234...", "marketplace");
     * ```
     */
    getMarketplace(contractAddress: string): Promise<import("..").Marketplace>;
    /**
     * Get an instance of a Pack contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const pack = await sdk.getPack("0x1234...");
     * + const pack = await sdk.getContract("0x1234...", "pack");
     * ```
     */
    getPack(contractAddress: string): Promise<import("..").Pack>;
    /**
     * Get an instance of a Pack contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const multiWrap = await sdk.getMultiwrap("0x1234...");
     * + const multiWrap = await sdk.getContract("0x1234...", "multiwrap");
     * ```
     */
    getMultiwrap(contractAddress: string): Promise<import("..").Multiwrap>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}");
     * ```
     */
    getContract(address: string): Promise<SmartContract>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @param contractType - the {@link ContractType} of the contract to load
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}", "nft-drop");
     * ```
     */
    getContract<TContractType extends ContractType>(address: string, contractType: TContractType): Promise<TContractType extends PrebuiltContractType ? ContractForPrebuiltContractType<TContractType> : SmartContract>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @param abi - the ABI ({@link ContractInterface}) of the contract to load
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}", ABI);
     * ```
     */
    getContract(address: string, abi: ContractInterface): Promise<SmartContract>;
    /**
     * @internal
     * @deprecated use {@link getContract} directly instead
     */
    getBuiltInContract<TContractType extends PrebuiltContractType>(address: string, contractType: TContractType): Promise<ContractForPrebuiltContractType<TContractType>>;
    /**
     * @param contractAddress - the address of the contract to attempt to resolve the contract type for
     * @returns the {@link ContractType} for the given contract address
     *
     */
    resolveContractType(contractAddress: string): Promise<ContractType>;
    /**
     * Return all the contracts deployed by the specified address
     * @param walletAddress - the deployed address
     * @example
     * ```javascript
     * const contracts = sdk.getContractList("{{wallet_address}}");
     * ```
     */
    getContractList(walletAddress: string): Promise<{
        address: string;
        contractType: "custom" | "edition-drop" | "edition" | "marketplace" | "multiwrap" | "nft-collection" | "nft-drop" | "pack" | "signature-drop" | "split" | "token-drop" | "token" | "vote";
        metadata: () => Promise<any>;
    }[]>;
    /**
     * Update the active signer or provider for all contracts
     * @param network - the new signer or provider
     */
    updateSignerOrProvider(network: NetworkOrSignerOrProvider): void;
    private updateContractSignerOrProvider;
    /**
     * Get an instance of a Custom contract from a json ABI
     * @param address - the address of the deployed contract
     * @param abi - the JSON abi
     * @returns the contract
     * @beta
     * @example
     * ```javascript
     * // Import your ABI from a JSON file
     * import myABI from "./path/to/myABI.json";
     *
     * const contract = sdk.getContractFromAbi(
     *   "{{contract_address}}",
     *   // Pass in the "abi" field from the JSON file
     *   myABI.abi
     * );
     * ```
     */
    getContractFromAbi(address: string, abi: ContractInterface): Promise<SmartContract<ethers.BaseContract>>;
    /**
     * Get the native balance of a given address (wallet or contract)
     * @example
     * ```javascript
     * const balance = await sdk.getBalance("0x...");
     * console.log(balance.displayValue);
     * ```
     * @param address - the address to check the balance for
     */
    getBalance(address: string): Promise<CurrencyValue>;
    /**
     * @internal
     */
    getPublisher(): ContractPublisher;
}
//# sourceMappingURL=sdk.d.ts.map