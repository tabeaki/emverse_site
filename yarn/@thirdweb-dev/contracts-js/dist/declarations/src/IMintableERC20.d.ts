import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
export interface IMintableERC20Interface extends utils.Interface {
    functions: {
        "mintTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "mintTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "mintTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
    events: {
        "TokensMinted(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensMinted"): EventFragment;
}
export interface TokensMintedEventObject {
    mintedTo: string;
    quantityMinted: BigNumber;
}
export declare type TokensMintedEvent = TypedEvent<[
    string,
    BigNumber
], TokensMintedEventObject>;
export declare type TokensMintedEventFilter = TypedEventFilter<TokensMintedEvent>;
export interface IMintableERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMintableERC20Interface;
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
        mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        mintTo(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensMinted(address,uint256)"(mintedTo?: string | null, quantityMinted?: null): TokensMintedEventFilter;
        TokensMinted(mintedTo?: string | null, quantityMinted?: null): TokensMintedEventFilter;
    };
    estimateGas: {
        mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IMintableERC20.d.ts.map