import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace ITokenBundle {
    type TokenStruct = {
        assetContract: string;
        tokenType: BigNumberish;
        tokenId: BigNumberish;
        totalAmount: BigNumberish;
    };
    type TokenStructOutput = [string, number, BigNumber, BigNumber] & {
        assetContract: string;
        tokenType: number;
        tokenId: BigNumber;
        totalAmount: BigNumber;
    };
}
export interface IMultiwrapInterface extends utils.Interface {
    functions: {
        "unwrap(uint256,address)": FunctionFragment;
        "wrap((address,uint8,uint256,uint256)[],string,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "unwrap" | "wrap"): FunctionFragment;
    encodeFunctionData(functionFragment: "unwrap", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "wrap", values: [ITokenBundle.TokenStruct[], string, string]): string;
    decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrap", data: BytesLike): Result;
    events: {
        "TokensUnwrapped(address,address,uint256)": EventFragment;
        "TokensWrapped(address,address,uint256,tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensUnwrapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensWrapped"): EventFragment;
}
export interface TokensUnwrappedEventObject {
    unwrapper: string;
    recipientOfWrappedContents: string;
    tokenIdOfWrappedToken: BigNumber;
}
export declare type TokensUnwrappedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TokensUnwrappedEventObject>;
export declare type TokensUnwrappedEventFilter = TypedEventFilter<TokensUnwrappedEvent>;
export interface TokensWrappedEventObject {
    wrapper: string;
    recipientOfWrappedToken: string;
    tokenIdOfWrappedToken: BigNumber;
    wrappedContents: ITokenBundle.TokenStructOutput[];
}
export declare type TokensWrappedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    ITokenBundle.TokenStructOutput[]
], TokensWrappedEventObject>;
export declare type TokensWrappedEventFilter = TypedEventFilter<TokensWrappedEvent>;
export interface IMultiwrap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMultiwrapInterface;
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
        unwrap(tokenId: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wrap(wrappedContents: ITokenBundle.TokenStruct[], uriForWrappedToken: string, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    unwrap(tokenId: BigNumberish, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wrap(wrappedContents: ITokenBundle.TokenStruct[], uriForWrappedToken: string, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        unwrap(tokenId: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        wrap(wrappedContents: ITokenBundle.TokenStruct[], uriForWrappedToken: string, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "TokensUnwrapped(address,address,uint256)"(unwrapper?: string | null, recipientOfWrappedContents?: string | null, tokenIdOfWrappedToken?: BigNumberish | null): TokensUnwrappedEventFilter;
        TokensUnwrapped(unwrapper?: string | null, recipientOfWrappedContents?: string | null, tokenIdOfWrappedToken?: BigNumberish | null): TokensUnwrappedEventFilter;
        "TokensWrapped(address,address,uint256,tuple[])"(wrapper?: string | null, recipientOfWrappedToken?: string | null, tokenIdOfWrappedToken?: BigNumberish | null, wrappedContents?: null): TokensWrappedEventFilter;
        TokensWrapped(wrapper?: string | null, recipientOfWrappedToken?: string | null, tokenIdOfWrappedToken?: BigNumberish | null, wrappedContents?: null): TokensWrappedEventFilter;
    };
    estimateGas: {
        unwrap(tokenId: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wrap(wrappedContents: ITokenBundle.TokenStruct[], uriForWrappedToken: string, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        unwrap(tokenId: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wrap(wrappedContents: ITokenBundle.TokenStruct[], uriForWrappedToken: string, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IMultiwrap.d.ts.map