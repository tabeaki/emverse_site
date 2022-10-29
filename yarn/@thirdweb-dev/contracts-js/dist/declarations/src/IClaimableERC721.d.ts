import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export interface IClaimableERC721Interface extends utils.Interface {
    functions: {
        "claim(address,uint256)": FunctionFragment;
        "verifyClaim(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "verifyClaim"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    events: {
        "TokensClaimed(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}
export interface TokensClaimedEventObject {
    claimer: string;
    receiver: string;
    startTokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export declare type TokensClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export declare type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface IClaimableERC721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IClaimableERC721Interface;
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
        claim(_receiver: string, _quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    claim(_receiver: string, _quantity: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyClaim(_claimer: string, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        claim(_receiver: string, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensClaimed(address,address,uint256,uint256)"(claimer?: string | null, receiver?: string | null, startTokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimer?: string | null, receiver?: string | null, startTokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
    };
    estimateGas: {
        claim(_receiver: string, _quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(_receiver: string, _quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IClaimableERC721.d.ts.map