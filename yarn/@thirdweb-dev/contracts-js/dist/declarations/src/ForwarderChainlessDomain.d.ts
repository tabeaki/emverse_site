import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace ForwarderChainlessDomain {
    type ForwardRequestStruct = {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
        chainid: BigNumberish;
    };
    type ForwardRequestStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
    ] & {
        from: string;
        to: string;
        value: BigNumber;
        gas: BigNumber;
        nonce: BigNumber;
        data: string;
        chainid: BigNumber;
    };
}
export interface ForwarderChainlessDomainInterface extends utils.Interface {
    functions: {
        "execute((address,address,uint256,uint256,uint256,bytes,uint256),bytes)": FunctionFragment;
        "getNonce(address)": FunctionFragment;
        "verify((address,address,uint256,uint256,uint256,bytes,uint256),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "execute" | "getNonce" | "verify"): FunctionFragment;
    encodeFunctionData(functionFragment: "execute", values: [ForwarderChainlessDomain.ForwardRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "verify", values: [ForwarderChainlessDomain.ForwardRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {};
}
export interface ForwarderChainlessDomain extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ForwarderChainlessDomainInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        execute(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getNonce(from: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        verify(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    execute(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;
    verify(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        execute(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string]>;
        getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;
        verify(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        execute(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;
        verify(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getNonce(from: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verify(req: ForwarderChainlessDomain.ForwardRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ForwarderChainlessDomain.d.ts.map