import { ContractWrapper } from "../core/classes/contract-wrapper";
import { Amount, Currency, CurrencyValue, Price } from "../types/currency";
import { BaseERC20 } from "../types/eips";
import { BigNumber, BigNumberish, providers } from "ethers";
export declare function isNativeToken(tokenAddress: string): boolean;
export declare function cleanCurrencyAddress(currencyAddress: string): string;
export declare function normalizePriceValue(provider: providers.Provider, inputPrice: Price, currencyAddress: string): Promise<BigNumber>;
export declare function fetchCurrencyMetadata(provider: providers.Provider, asset: string): Promise<Currency>;
export declare function fetchCurrencyValue(providerOrSigner: providers.Provider, asset: string, price: BigNumberish): Promise<CurrencyValue>;
export declare function setErc20Allowance(contractToApprove: ContractWrapper<any>, value: BigNumber, currencyAddress: string, overrides: any): Promise<any>;
export declare function approveErc20Allowance(contractToApprove: ContractWrapper<any>, currencyAddress: string, price: BigNumber, quantity: BigNumberish, tokenDecimals: number): Promise<void>;
export declare function hasERC20Allowance(contractToApprove: ContractWrapper<any>, currencyAddress: string, value: BigNumber): Promise<boolean>;
export declare function normalizeAmount(contractWrapper: ContractWrapper<BaseERC20>, amount: Amount): Promise<BigNumber>;
//# sourceMappingURL=currency.d.ts.map