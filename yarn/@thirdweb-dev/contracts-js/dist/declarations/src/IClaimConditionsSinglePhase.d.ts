import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace IClaimCondition {
    type ClaimConditionStruct = {
        startTimestamp: BigNumberish;
        maxClaimableSupply: BigNumberish;
        supplyClaimed: BigNumberish;
        quantityLimitPerTransaction: BigNumberish;
        waitTimeInSecondsBetweenClaims: BigNumberish;
        merkleRoot: BytesLike;
        pricePerToken: BigNumberish;
        currency: string;
    };
    type ClaimConditionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        startTimestamp: BigNumber;
        maxClaimableSupply: BigNumber;
        supplyClaimed: BigNumber;
        quantityLimitPerTransaction: BigNumber;
        waitTimeInSecondsBetweenClaims: BigNumber;
        merkleRoot: string;
        pricePerToken: BigNumber;
        currency: string;
    };
}
export interface IClaimConditionsSinglePhaseInterface extends utils.Interface {
    functions: {
        "setClaimConditions((uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address),bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setClaimConditions"): FunctionFragment;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IClaimCondition.ClaimConditionStruct, boolean]): string;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    events: {
        "ClaimConditionUpdated(tuple,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimConditionUpdated"): EventFragment;
}
export interface ClaimConditionUpdatedEventObject {
    claimConditions: IClaimCondition.ClaimConditionStructOutput;
    resetClaimEligibility: boolean;
}
export declare type ClaimConditionUpdatedEvent = TypedEvent<[
    IClaimCondition.ClaimConditionStructOutput,
    boolean
], ClaimConditionUpdatedEventObject>;
export declare type ClaimConditionUpdatedEventFilter = TypedEventFilter<ClaimConditionUpdatedEvent>;
export interface IClaimConditionsSinglePhase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IClaimConditionsSinglePhaseInterface;
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
        setClaimConditions(phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    setClaimConditions(phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setClaimConditions(phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimConditionUpdated(tuple,bool)"(claimConditions?: null, resetClaimEligibility?: null): ClaimConditionUpdatedEventFilter;
        ClaimConditionUpdated(claimConditions?: null, resetClaimEligibility?: null): ClaimConditionUpdatedEventFilter;
    };
    estimateGas: {
        setClaimConditions(phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setClaimConditions(phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IClaimConditionsSinglePhase.d.ts.map