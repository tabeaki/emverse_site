import { ClaimOptions } from "../../types/claim-conditions/claim-conditions";
import { BaseClaimConditionERC1155 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResult } from "../types";
import { TransactionTask } from "./TransactionTask";
import { ContractWrapper } from "./contract-wrapper";
import { DropErc1155ClaimConditions } from "./drop-erc1155-claim-conditions";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumberish } from "ethers";
/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc1155.claim(tokenId, quantity);
 * await contract.erc1155.claimConditions.getActive(tokenId);
 * ```
 */
export declare class Erc1155ClaimableWithConditions implements DetectableFeature {
    featureName: "ERC1155ClaimableWithConditions";
    conditions: DropErc1155ClaimConditions<BaseClaimConditionERC1155>;
    private contractWrapper;
    private storage;
    constructor(contractWrapper: ContractWrapper<BaseClaimConditionERC1155>, storage: ThirdwebStorage);
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     */
    getClaimTransaction(destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, options?: ClaimOptions): Promise<TransactionTask>;
    /**
     * Claim NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const tokenId = 0; // the id of the NFT you want to claim
     * const quantity = 1; // how many NFTs you want to claim
     *
     * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     *
     * @returns - Receipt for the transaction
     */
    to(destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, options?: ClaimOptions): Promise<TransactionResult>;
    private getArgs;
    private isLegacyNFTContract;
}
//# sourceMappingURL=erc-1155-claimable-with-conditions.d.ts.map