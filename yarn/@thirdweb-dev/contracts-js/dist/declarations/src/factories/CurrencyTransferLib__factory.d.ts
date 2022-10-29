import type { CurrencyTransferLib, CurrencyTransferLibInterface } from "../CurrencyTransferLib";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type CurrencyTransferLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurrencyTransferLib__factory extends ContractFactory {
    constructor(...args: CurrencyTransferLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurrencyTransferLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurrencyTransferLib;
    connect(signer: Signer): CurrencyTransferLib__factory;
    static readonly bytecode = "0x60b1610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806331f7d964146038575b600080fd5b605273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f3fea264697066735822122085f4f6a310e2d2098f2ec71dc2578d7c6d041f383eee301529c3400f53b4de1e64736f6c634300080c0033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): CurrencyTransferLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurrencyTransferLib;
}
export {};
//# sourceMappingURL=CurrencyTransferLib__factory.d.ts.map