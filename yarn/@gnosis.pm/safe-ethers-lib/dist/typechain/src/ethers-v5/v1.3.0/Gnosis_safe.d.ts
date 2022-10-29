import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface Gnosis_safeInterface extends utils.Interface {
    functions: {
        "VERSION()": FunctionFragment;
        "addOwnerWithThreshold(address,uint256)": FunctionFragment;
        "approveHash(bytes32)": FunctionFragment;
        "approvedHashes(address,bytes32)": FunctionFragment;
        "changeThreshold(uint256)": FunctionFragment;
        "checkNSignatures(bytes32,bytes,bytes,uint256)": FunctionFragment;
        "checkSignatures(bytes32,bytes,bytes)": FunctionFragment;
        "disableModule(address,address)": FunctionFragment;
        "domainSeparator()": FunctionFragment;
        "enableModule(address)": FunctionFragment;
        "encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
        "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)": FunctionFragment;
        "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
        "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
        "getChainId()": FunctionFragment;
        "getModulesPaginated(address,uint256)": FunctionFragment;
        "getOwners()": FunctionFragment;
        "getStorageAt(uint256,uint256)": FunctionFragment;
        "getThreshold()": FunctionFragment;
        "getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)": FunctionFragment;
        "isModuleEnabled(address)": FunctionFragment;
        "isOwner(address)": FunctionFragment;
        "nonce()": FunctionFragment;
        "removeOwner(address,address,uint256)": FunctionFragment;
        "requiredTxGas(address,uint256,bytes,uint8)": FunctionFragment;
        "setFallbackHandler(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setup(address[],uint256,address,bytes,address,address,uint256,address)": FunctionFragment;
        "signedMessages(bytes32)": FunctionFragment;
        "simulateAndRevert(address,bytes)": FunctionFragment;
        "swapOwner(address,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "VERSION" | "addOwnerWithThreshold" | "approveHash" | "approvedHashes" | "changeThreshold" | "checkNSignatures" | "checkSignatures" | "disableModule" | "domainSeparator" | "enableModule" | "encodeTransactionData" | "execTransaction" | "execTransactionFromModule" | "execTransactionFromModuleReturnData" | "getChainId" | "getModulesPaginated" | "getOwners" | "getStorageAt" | "getThreshold" | "getTransactionHash" | "isModuleEnabled" | "isOwner" | "nonce" | "removeOwner" | "requiredTxGas" | "setFallbackHandler" | "setGuard" | "setup" | "signedMessages" | "simulateAndRevert" | "swapOwner"): FunctionFragment;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "addOwnerWithThreshold", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approveHash", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "approvedHashes", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "changeThreshold", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "checkNSignatures", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "checkSignatures", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "disableModule", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "domainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "enableModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "encodeTransactionData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "execTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModuleReturnData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModulesPaginated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStorageAt", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isModuleEnabled", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOwner", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "requiredTxGas", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setFallbackHandler", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setup", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "signedMessages", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "simulateAndRevert", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "swapOwner", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOwnerWithThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkNSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeTransactionData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModuleReturnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModulesPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStorageAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isModuleEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requiredTxGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFallbackHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateAndRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;
    events: {
        "AddedOwner(address)": EventFragment;
        "ApproveHash(bytes32,address)": EventFragment;
        "ChangedFallbackHandler(address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "ChangedThreshold(uint256)": EventFragment;
        "DisabledModule(address)": EventFragment;
        "EnabledModule(address)": EventFragment;
        "ExecutionFailure(bytes32,uint256)": EventFragment;
        "ExecutionFromModuleFailure(address)": EventFragment;
        "ExecutionFromModuleSuccess(address)": EventFragment;
        "ExecutionSuccess(bytes32,uint256)": EventFragment;
        "RemovedOwner(address)": EventFragment;
        "SafeReceived(address,uint256)": EventFragment;
        "SafeSetup(address,address[],uint256,address,address)": EventFragment;
        "SignMsg(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApproveHash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedFallbackHandler"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedThreshold"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFailure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleFailure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFromModuleSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SafeReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SafeSetup"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignMsg"): EventFragment;
}
export interface AddedOwnerEventObject {
    owner: string;
}
export declare type AddedOwnerEvent = TypedEvent<[string], AddedOwnerEventObject>;
export declare type AddedOwnerEventFilter = TypedEventFilter<AddedOwnerEvent>;
export interface ApproveHashEventObject {
    approvedHash: string;
    owner: string;
}
export declare type ApproveHashEvent = TypedEvent<[
    string,
    string
], ApproveHashEventObject>;
export declare type ApproveHashEventFilter = TypedEventFilter<ApproveHashEvent>;
export interface ChangedFallbackHandlerEventObject {
    handler: string;
}
export declare type ChangedFallbackHandlerEvent = TypedEvent<[
    string
], ChangedFallbackHandlerEventObject>;
export declare type ChangedFallbackHandlerEventFilter = TypedEventFilter<ChangedFallbackHandlerEvent>;
export interface ChangedGuardEventObject {
    guard: string;
}
export declare type ChangedGuardEvent = TypedEvent<[string], ChangedGuardEventObject>;
export declare type ChangedGuardEventFilter = TypedEventFilter<ChangedGuardEvent>;
export interface ChangedThresholdEventObject {
    threshold: BigNumber;
}
export declare type ChangedThresholdEvent = TypedEvent<[
    BigNumber
], ChangedThresholdEventObject>;
export declare type ChangedThresholdEventFilter = TypedEventFilter<ChangedThresholdEvent>;
export interface DisabledModuleEventObject {
    module: string;
}
export declare type DisabledModuleEvent = TypedEvent<[
    string
], DisabledModuleEventObject>;
export declare type DisabledModuleEventFilter = TypedEventFilter<DisabledModuleEvent>;
export interface EnabledModuleEventObject {
    module: string;
}
export declare type EnabledModuleEvent = TypedEvent<[string], EnabledModuleEventObject>;
export declare type EnabledModuleEventFilter = TypedEventFilter<EnabledModuleEvent>;
export interface ExecutionFailureEventObject {
    txHash: string;
    payment: BigNumber;
}
export declare type ExecutionFailureEvent = TypedEvent<[
    string,
    BigNumber
], ExecutionFailureEventObject>;
export declare type ExecutionFailureEventFilter = TypedEventFilter<ExecutionFailureEvent>;
export interface ExecutionFromModuleFailureEventObject {
    module: string;
}
export declare type ExecutionFromModuleFailureEvent = TypedEvent<[
    string
], ExecutionFromModuleFailureEventObject>;
export declare type ExecutionFromModuleFailureEventFilter = TypedEventFilter<ExecutionFromModuleFailureEvent>;
export interface ExecutionFromModuleSuccessEventObject {
    module: string;
}
export declare type ExecutionFromModuleSuccessEvent = TypedEvent<[
    string
], ExecutionFromModuleSuccessEventObject>;
export declare type ExecutionFromModuleSuccessEventFilter = TypedEventFilter<ExecutionFromModuleSuccessEvent>;
export interface ExecutionSuccessEventObject {
    txHash: string;
    payment: BigNumber;
}
export declare type ExecutionSuccessEvent = TypedEvent<[
    string,
    BigNumber
], ExecutionSuccessEventObject>;
export declare type ExecutionSuccessEventFilter = TypedEventFilter<ExecutionSuccessEvent>;
export interface RemovedOwnerEventObject {
    owner: string;
}
export declare type RemovedOwnerEvent = TypedEvent<[string], RemovedOwnerEventObject>;
export declare type RemovedOwnerEventFilter = TypedEventFilter<RemovedOwnerEvent>;
export interface SafeReceivedEventObject {
    sender: string;
    value: BigNumber;
}
export declare type SafeReceivedEvent = TypedEvent<[
    string,
    BigNumber
], SafeReceivedEventObject>;
export declare type SafeReceivedEventFilter = TypedEventFilter<SafeReceivedEvent>;
export interface SafeSetupEventObject {
    initiator: string;
    owners: string[];
    threshold: BigNumber;
    initializer: string;
    fallbackHandler: string;
}
export declare type SafeSetupEvent = TypedEvent<[
    string,
    string[],
    BigNumber,
    string,
    string
], SafeSetupEventObject>;
export declare type SafeSetupEventFilter = TypedEventFilter<SafeSetupEvent>;
export interface SignMsgEventObject {
    msgHash: string;
}
export declare type SignMsgEvent = TypedEvent<[string], SignMsgEventObject>;
export declare type SignMsgEventFilter = TypedEventFilter<SignMsgEvent>;
export interface Gnosis_safe extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Gnosis_safeInterface;
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
        VERSION(overrides?: CallOverrides): Promise<[string]>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkNSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, requiredSignatures: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
        checkSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        domainSeparator(overrides?: CallOverrides): Promise<[string]>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getOwners(overrides?: CallOverrides): Promise<[string[]]>;
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    VERSION(overrides?: CallOverrides): Promise<string>;
    addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkNSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, requiredSignatures: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    checkSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    domainSeparator(overrides?: CallOverrides): Promise<string>;
    enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
        array: string[];
        next: string;
    }>;
    getOwners(overrides?: CallOverrides): Promise<string[]>;
    getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    nonce(overrides?: CallOverrides): Promise<BigNumber>;
    removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        VERSION(overrides?: CallOverrides): Promise<string>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkNSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, requiredSignatures: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        domainSeparator(overrides?: CallOverrides): Promise<string>;
        enableModule(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getOwners(overrides?: CallOverrides): Promise<string[]>;
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddedOwner(address)"(owner?: null): AddedOwnerEventFilter;
        AddedOwner(owner?: null): AddedOwnerEventFilter;
        "ApproveHash(bytes32,address)"(approvedHash?: PromiseOrValue<BytesLike> | null, owner?: PromiseOrValue<string> | null): ApproveHashEventFilter;
        ApproveHash(approvedHash?: PromiseOrValue<BytesLike> | null, owner?: PromiseOrValue<string> | null): ApproveHashEventFilter;
        "ChangedFallbackHandler(address)"(handler?: null): ChangedFallbackHandlerEventFilter;
        ChangedFallbackHandler(handler?: null): ChangedFallbackHandlerEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "ChangedThreshold(uint256)"(threshold?: null): ChangedThresholdEventFilter;
        ChangedThreshold(threshold?: null): ChangedThresholdEventFilter;
        "DisabledModule(address)"(module?: null): DisabledModuleEventFilter;
        DisabledModule(module?: null): DisabledModuleEventFilter;
        "EnabledModule(address)"(module?: null): EnabledModuleEventFilter;
        EnabledModule(module?: null): EnabledModuleEventFilter;
        "ExecutionFailure(bytes32,uint256)"(txHash?: null, payment?: null): ExecutionFailureEventFilter;
        ExecutionFailure(txHash?: null, payment?: null): ExecutionFailureEventFilter;
        "ExecutionFromModuleFailure(address)"(module?: PromiseOrValue<string> | null): ExecutionFromModuleFailureEventFilter;
        ExecutionFromModuleFailure(module?: PromiseOrValue<string> | null): ExecutionFromModuleFailureEventFilter;
        "ExecutionFromModuleSuccess(address)"(module?: PromiseOrValue<string> | null): ExecutionFromModuleSuccessEventFilter;
        ExecutionFromModuleSuccess(module?: PromiseOrValue<string> | null): ExecutionFromModuleSuccessEventFilter;
        "ExecutionSuccess(bytes32,uint256)"(txHash?: null, payment?: null): ExecutionSuccessEventFilter;
        ExecutionSuccess(txHash?: null, payment?: null): ExecutionSuccessEventFilter;
        "RemovedOwner(address)"(owner?: null): RemovedOwnerEventFilter;
        RemovedOwner(owner?: null): RemovedOwnerEventFilter;
        "SafeReceived(address,uint256)"(sender?: PromiseOrValue<string> | null, value?: null): SafeReceivedEventFilter;
        SafeReceived(sender?: PromiseOrValue<string> | null, value?: null): SafeReceivedEventFilter;
        "SafeSetup(address,address[],uint256,address,address)"(initiator?: PromiseOrValue<string> | null, owners?: null, threshold?: null, initializer?: null, fallbackHandler?: null): SafeSetupEventFilter;
        SafeSetup(initiator?: PromiseOrValue<string> | null, owners?: null, threshold?: null, initializer?: null, fallbackHandler?: null): SafeSetupEventFilter;
        "SignMsg(bytes32)"(msgHash?: PromiseOrValue<BytesLike> | null): SignMsgEventFilter;
        SignMsg(msgHash?: PromiseOrValue<BytesLike> | null): SignMsgEventFilter;
    };
    estimateGas: {
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkNSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, requiredSignatures: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        checkSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOwners(overrides?: CallOverrides): Promise<BigNumber>;
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addOwnerWithThreshold(owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approveHash(hashToApprove: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approvedHashes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeThreshold(_threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkNSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, requiredSignatures: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkSignatures(dataHash: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        encodeTransactionData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStorageAt(offset: PromiseOrValue<BigNumberish>, length: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isModuleEnabled(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeOwner(prevOwner: PromiseOrValue<string>, owner: PromiseOrValue<string>, _threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        requiredTxGas(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFallbackHandler(handler: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setup(_owners: PromiseOrValue<string>[], _threshold: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, fallbackHandler: PromiseOrValue<string>, paymentToken: PromiseOrValue<string>, payment: PromiseOrValue<BigNumberish>, paymentReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        signedMessages(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        simulateAndRevert(targetContract: PromiseOrValue<string>, calldataPayload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapOwner(prevOwner: PromiseOrValue<string>, oldOwner: PromiseOrValue<string>, newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
