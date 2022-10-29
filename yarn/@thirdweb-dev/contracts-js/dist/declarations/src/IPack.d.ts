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
export interface IPackInterface extends utils.Interface {
    functions: {
        "createPack((address,uint8,uint256,uint256)[],uint256[],string,uint128,uint128,address)": FunctionFragment;
        "openPack(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createPack" | "openPack"): FunctionFragment;
    encodeFunctionData(functionFragment: "createPack", values: [
        ITokenBundle.TokenStruct[],
        BigNumberish[],
        string,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "openPack", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "createPack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPack", data: BytesLike): Result;
    events: {
        "PackCreated(uint256,address,uint256)": EventFragment;
        "PackOpened(uint256,address,uint256,tuple[])": EventFragment;
        "PackUpdated(uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PackCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PackOpened"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PackUpdated"): EventFragment;
}
export interface PackCreatedEventObject {
    packId: BigNumber;
    recipient: string;
    totalPacksCreated: BigNumber;
}
export declare type PackCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], PackCreatedEventObject>;
export declare type PackCreatedEventFilter = TypedEventFilter<PackCreatedEvent>;
export interface PackOpenedEventObject {
    packId: BigNumber;
    opener: string;
    numOfPacksOpened: BigNumber;
    rewardUnitsDistributed: ITokenBundle.TokenStructOutput[];
}
export declare type PackOpenedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    ITokenBundle.TokenStructOutput[]
], PackOpenedEventObject>;
export declare type PackOpenedEventFilter = TypedEventFilter<PackOpenedEvent>;
export interface PackUpdatedEventObject {
    packId: BigNumber;
    recipient: string;
    totalPacksCreated: BigNumber;
}
export declare type PackUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], PackUpdatedEventObject>;
export declare type PackUpdatedEventFilter = TypedEventFilter<PackUpdatedEvent>;
export interface IPack extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPackInterface;
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
        createPack(contents: ITokenBundle.TokenStruct[], numOfRewardUnits: BigNumberish[], packUri: string, openStartTimestamp: BigNumberish, amountDistributedPerOpen: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        openPack(packId: BigNumberish, amountToOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createPack(contents: ITokenBundle.TokenStruct[], numOfRewardUnits: BigNumberish[], packUri: string, openStartTimestamp: BigNumberish, amountDistributedPerOpen: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    openPack(packId: BigNumberish, amountToOpen: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createPack(contents: ITokenBundle.TokenStruct[], numOfRewardUnits: BigNumberish[], packUri: string, openStartTimestamp: BigNumberish, amountDistributedPerOpen: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            packId: BigNumber;
            packTotalSupply: BigNumber;
        }>;
        openPack(packId: BigNumberish, amountToOpen: BigNumberish, overrides?: CallOverrides): Promise<ITokenBundle.TokenStructOutput[]>;
    };
    filters: {
        "PackCreated(uint256,address,uint256)"(packId?: BigNumberish | null, recipient?: null, totalPacksCreated?: null): PackCreatedEventFilter;
        PackCreated(packId?: BigNumberish | null, recipient?: null, totalPacksCreated?: null): PackCreatedEventFilter;
        "PackOpened(uint256,address,uint256,tuple[])"(packId?: BigNumberish | null, opener?: string | null, numOfPacksOpened?: null, rewardUnitsDistributed?: null): PackOpenedEventFilter;
        PackOpened(packId?: BigNumberish | null, opener?: string | null, numOfPacksOpened?: null, rewardUnitsDistributed?: null): PackOpenedEventFilter;
        "PackUpdated(uint256,address,uint256)"(packId?: BigNumberish | null, recipient?: null, totalPacksCreated?: null): PackUpdatedEventFilter;
        PackUpdated(packId?: BigNumberish | null, recipient?: null, totalPacksCreated?: null): PackUpdatedEventFilter;
    };
    estimateGas: {
        createPack(contents: ITokenBundle.TokenStruct[], numOfRewardUnits: BigNumberish[], packUri: string, openStartTimestamp: BigNumberish, amountDistributedPerOpen: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        openPack(packId: BigNumberish, amountToOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createPack(contents: ITokenBundle.TokenStruct[], numOfRewardUnits: BigNumberish[], packUri: string, openStartTimestamp: BigNumberish, amountDistributedPerOpen: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        openPack(packId: BigNumberish, amountToOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IPack.d.ts.map