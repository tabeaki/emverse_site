import type { ERC721Holder, ERC721HolderInterface } from "../ERC721Holder";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type ERC721HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721Holder__factory extends ContractFactory {
    constructor(...args: ERC721HolderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721Holder;
    connect(signer: Signer): ERC721Holder__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101d4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004e61003e3660046100c2565b630a85bd0160e11b949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100a757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156100d857600080fd5b6100e185610083565b93506100ef60208601610083565b925060408501359150606085013567ffffffffffffffff8082111561011357600080fd5b818701915087601f83011261012757600080fd5b813581811115610139576101396100ac565b604051601f8201601f19908116603f01168101908382118183101715610161576101616100ac565b816040528281528a602084870101111561017a57600080fd5b8260208601602083013760006020848301015280955050505050509295919450925056fea2646970667358221220beba93899db2cad015e85fe5d8ec3f2f14f914cc4956e504b07a28100197c2b064736f6c634300080c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC721HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Holder;
}
export {};
//# sourceMappingURL=ERC721Holder__factory.d.ts.map