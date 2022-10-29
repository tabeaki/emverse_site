import { TokenMintInput } from "../../schema";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResult } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Erc20 } from "./erc-20";
import type { IMintableERC20, IMulticall } from "@thirdweb-dev/contracts-js";
/**
 * Mint Many ERC20 Tokens at once
 * @remarks Token batch minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */
export declare class Erc20BatchMintable implements DetectableFeature {
    featureName: "ERC20BatchMintable";
    private contractWrapper;
    private erc20;
    constructor(erc20: Erc20, contractWrapper: ContractWrapper<IMintableERC20 & IMulticall>);
    /**
     * Mint Tokens To Many Wallets
     *
     * @remarks Mint tokens to many wallets in one transaction.
     *
     * @example
     * ```javascript
     * // Data of the tokens you want to mint
     * const data = [
     *   {
     *     toAddress: "{{wallet_address}}", // Address to mint tokens to
     *     amount: 0.2, // How many tokens to mint to specified address
     *   },
     *  {
     *    toAddress: "0x...",
     *    amount: 1.4,
     *  }
     * ]
     *
     * await contract.token.mint.batch(data);
     * ```
     */
    to(args: TokenMintInput[]): Promise<TransactionResult>;
}
//# sourceMappingURL=erc-20-batch-mintable.d.ts.map