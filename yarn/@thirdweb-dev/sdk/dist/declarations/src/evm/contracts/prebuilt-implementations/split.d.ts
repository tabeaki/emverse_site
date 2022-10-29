import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { UpdateableNetwork } from "../../core/interfaces/contract";
import { NetworkOrSignerOrProvider, TransactionResult } from "../../core/types";
import { SplitsContractSchema } from "../../schema/contracts/splits";
import { SplitRecipient } from "../../types/SplitRecipient";
import { CurrencyValue } from "../../types/currency";
import type { Split as SplitContract } from "@thirdweb-dev/contracts-js";
import type ABI from "@thirdweb-dev/contracts-js/dist/abis/Split.json";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, CallOverrides } from "ethers";
/**
 * Create custom royalty splits to distribute funds.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "split");
 * ```
 *
 * @public
 */
export declare class Split implements UpdateableNetwork {
    static contractRoles: readonly ["admin"];
    private contractWrapper;
    private storage;
    abi: typeof ABI;
    metadata: ContractMetadata<SplitContract, typeof SplitsContractSchema>;
    encoder: ContractEncoder<SplitContract>;
    estimator: GasCostEstimator<SplitContract>;
    events: ContractEvents<SplitContract>;
    roles: ContractRoles<SplitContract, typeof Split.contractRoles[number]>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<SplitContract>;
    private _chainId;
    get chainId(): number;
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
    } | undefined, abi: typeof ABI, chainId: number, contractWrapper?: ContractWrapper<SplitContract>);
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get Recipients of this splits contract
     *
     * @remarks Get the data about the shares of every split recipient on the contract
     *
     * @example
     * ```javascript
     * const recipients = await contract.getAllRecipients();
     * console.log(recipients);
     * ```
     */
    getAllRecipients(): Promise<SplitRecipient[]>;
    /**
     * Returns all the recipients and their balances in the native currency.
     *
     * @returns A map of recipient addresses to their balances in the native currency.
     */
    balanceOfAllRecipients(): Promise<{
        [key: string]: BigNumber;
    }>;
    /**
     * Returns all the recipients and their balances in a non-native currency.
     *
     * @param tokenAddress - The address of the currency to check the balances in.
     * @returns A map of recipient addresses to their balances in the specified currency.
     */
    balanceOfTokenAllRecipients(tokenAddress: string): Promise<{
        [key: string]: {
            symbol: string;
            value: BigNumber;
            name: string;
            decimals: number;
            displayValue: string;
        };
    }>;
    /**
     * Get Funds owed to a particular wallet
     *
     * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
     *
     * @example
     * ```javascript
     * // The address to check the funds of
     * const address = "{{wallet_address}}";
     * const funds = await contract.balanceOf(address);
     * console.log(funds);
     * ```
     */
    balanceOf(address: string): Promise<BigNumber>;
    /**
     * Get non-native Token Funds owed to a particular wallet
     *
     * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
     *
     * @example
     * ```javascript
     * // The address to check the funds of
     * const address = "{{wallet_address}}";
     * // The address of the currency to check the contracts funds of
     * const tokenAddress = "0x..."
     * const funds = await contract.balanceOfToken(address, tokenAddress);
     * console.log(funds);
     * ```
     */
    balanceOfToken(walletAddress: string, tokenAddress: string): Promise<CurrencyValue>;
    /**
     * Get the % of funds owed to a given address
     * @param address - the address to check percentage of
     */
    getRecipientSplitPercentage(address: string): Promise<SplitRecipient>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Withdraw Funds
     * @remarks Triggers a transfer to account of the amount of native currency they are owed.
     *
     * @example
     * ```javascript
     * // the wallet address that wants to withdraw their funds
     * const walletAddress = "{{wallet_address}}"
     * await contract.withdraw(walletAddress);
     * ```
     *
     * @param walletAddress - The address to distributes the amount to
     */
    withdraw(walletAddress: string): Promise<TransactionResult>;
    /**
     * Triggers a transfer to account of the amount of a given currency they are owed.
     *
     * @param walletAddress - The address to distributes the amount to
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    withdrawToken(walletAddress: string, tokenAddress: string): Promise<TransactionResult>;
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * await contract.distribute();
     * ```
     */
    distribute(): Promise<TransactionResult>;
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * // The address of the currency to distribute funds
     * const tokenAddress = "0x..."
     * await contract.distributeToken(tokenAddress);
     * ```
     *
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    distributeToken(tokenAddress: string): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private _pendingPayment;
    /**
     * @internal
     */
    call(functionName: string, ...args: unknown[] | [...unknown[], CallOverrides]): Promise<any>;
}
//# sourceMappingURL=split.d.ts.map