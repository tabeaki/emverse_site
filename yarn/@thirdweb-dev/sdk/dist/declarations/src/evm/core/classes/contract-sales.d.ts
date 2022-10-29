import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResult } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import type { IPrimarySale } from "@thirdweb-dev/contracts-js";
/**
 * Handle primary sales recipients
 * @remarks Configure primary sale recipients for an entire contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const salesRecipient = await contract.sales.getRecipient();
 * await contract.sales.setRecipient(recipientWalletAddress);
 * ```
 * @public
 */
export declare class ContractPrimarySale<TContract extends IPrimarySale> implements DetectableFeature {
    featureName: "PrimarySale";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Get the primary sale recipient.
     * @returns the wallet address.
     * @example
     * ```javascript
     * const salesRecipient = await contract.sales.getRecipient();
     * ```
     * @public
     * @twfeature PrimarySale
     */
    getRecipient(): Promise<string>;
    /**
     * Set the primary sale recipient
     * @param recipient - the wallet address
     * @example
     * ```javascript
     * await contract.sales.setRecipient(recipientWalletAddress);
     * ```
     * @public
     * @twfeature PrimarySale
     */
    setRecipient(recipient: string): Promise<TransactionResult>;
}
//# sourceMappingURL=contract-sales.d.ts.map