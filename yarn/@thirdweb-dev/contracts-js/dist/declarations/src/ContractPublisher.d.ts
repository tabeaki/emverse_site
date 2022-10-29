import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace IContractPublisher {
    type CustomContractInstanceStruct = {
        contractId: string;
        publishTimestamp: BigNumberish;
        publishMetadataUri: string;
        bytecodeHash: BytesLike;
        implementation: string;
    };
    type CustomContractInstanceStructOutput = [
        string,
        BigNumber,
        string,
        string,
        string
    ] & {
        contractId: string;
        publishTimestamp: BigNumber;
        publishMetadataUri: string;
        bytecodeHash: string;
        implementation: string;
    };
}
export interface ContractPublisherInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "getAllPublishedContracts(address)": FunctionFragment;
        "getPublishedContract(address,string)": FunctionFragment;
        "getPublishedContractVersions(address,string)": FunctionFragment;
        "getPublishedUriFromCompilerUri(string)": FunctionFragment;
        "getPublisherProfileUri(address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "isPaused()": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "prevPublisher()": FunctionFragment;
        "publishContract(address,string,string,string,bytes32,address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setPublisherProfileUri(address,string)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "unpublishContract(address,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "getAllPublishedContracts" | "getPublishedContract" | "getPublishedContractVersions" | "getPublishedUriFromCompilerUri" | "getPublisherProfileUri" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "isPaused" | "isTrustedForwarder" | "multicall" | "prevPublisher" | "publishContract" | "renounceRole" | "revokeRole" | "setPause" | "setPublisherProfileUri" | "supportsInterface" | "unpublishContract"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllPublishedContracts", values: [string]): string;
    encodeFunctionData(functionFragment: "getPublishedContract", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPublishedContractVersions", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPublishedUriFromCompilerUri", values: [string]): string;
    encodeFunctionData(functionFragment: "getPublisherProfileUri", values: [string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "prevPublisher", values?: undefined): string;
    encodeFunctionData(functionFragment: "publishContract", values: [string, string, string, string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setPause", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setPublisherProfileUri", values: [string, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unpublishContract", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPublishedContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublishedContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublishedContractVersions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublishedUriFromCompilerUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublisherProfileUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prevPublisher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPublisherProfileUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpublishContract", data: BytesLike): Result;
    events: {
        "ContractPublished(address,address,tuple)": EventFragment;
        "ContractUnpublished(address,address,string)": EventFragment;
        "Paused(bool)": EventFragment;
        "PublisherProfileUpdated(address,string,string)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractPublished"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractUnpublished"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PublisherProfileUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface ContractPublishedEventObject {
    operator: string;
    publisher: string;
    publishedContract: IContractPublisher.CustomContractInstanceStructOutput;
}
export declare type ContractPublishedEvent = TypedEvent<[
    string,
    string,
    IContractPublisher.CustomContractInstanceStructOutput
], ContractPublishedEventObject>;
export declare type ContractPublishedEventFilter = TypedEventFilter<ContractPublishedEvent>;
export interface ContractUnpublishedEventObject {
    operator: string;
    publisher: string;
    contractId: string;
}
export declare type ContractUnpublishedEvent = TypedEvent<[
    string,
    string,
    string
], ContractUnpublishedEventObject>;
export declare type ContractUnpublishedEventFilter = TypedEventFilter<ContractUnpublishedEvent>;
export interface PausedEventObject {
    isPaused: boolean;
}
export declare type PausedEvent = TypedEvent<[boolean], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PublisherProfileUpdatedEventObject {
    publisher: string;
    prevURI: string;
    newURI: string;
}
export declare type PublisherProfileUpdatedEvent = TypedEvent<[
    string,
    string,
    string
], PublisherProfileUpdatedEventObject>;
export declare type PublisherProfileUpdatedEventFilter = TypedEventFilter<PublisherProfileUpdatedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface ContractPublisher extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ContractPublisherInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        getAllPublishedContracts(_publisher: string, overrides?: CallOverrides): Promise<[
            IContractPublisher.CustomContractInstanceStructOutput[]
        ] & {
            published: IContractPublisher.CustomContractInstanceStructOutput[];
        }>;
        getPublishedContract(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<[
            IContractPublisher.CustomContractInstanceStructOutput
        ] & {
            published: IContractPublisher.CustomContractInstanceStructOutput;
        }>;
        getPublishedContractVersions(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<[
            IContractPublisher.CustomContractInstanceStructOutput[]
        ] & {
            published: IContractPublisher.CustomContractInstanceStructOutput[];
        }>;
        getPublishedUriFromCompilerUri(compilerMetadataUri: string, overrides?: CallOverrides): Promise<[string[]] & {
            publishedMetadataUris: string[];
        }>;
        getPublisherProfileUri(publisher: string, overrides?: CallOverrides): Promise<[string] & {
            uri: string;
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        prevPublisher(overrides?: CallOverrides): Promise<[string]>;
        publishContract(_publisher: string, _contractId: string, _publishMetadataUri: string, _compilerMetadataUri: string, _bytecodeHash: BytesLike, _implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPause(_pause: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPublisherProfileUri(publisher: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        unpublishContract(_publisher: string, _contractId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    getAllPublishedContracts(_publisher: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
    getPublishedContract(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput>;
    getPublishedContractVersions(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
    getPublishedUriFromCompilerUri(compilerMetadataUri: string, overrides?: CallOverrides): Promise<string[]>;
    getPublisherProfileUri(publisher: string, overrides?: CallOverrides): Promise<string>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    prevPublisher(overrides?: CallOverrides): Promise<string>;
    publishContract(_publisher: string, _contractId: string, _publishMetadataUri: string, _compilerMetadataUri: string, _bytecodeHash: BytesLike, _implementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPause(_pause: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPublisherProfileUri(publisher: string, uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    unpublishContract(_publisher: string, _contractId: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        getAllPublishedContracts(_publisher: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
        getPublishedContract(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput>;
        getPublishedContractVersions(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
        getPublishedUriFromCompilerUri(compilerMetadataUri: string, overrides?: CallOverrides): Promise<string[]>;
        getPublisherProfileUri(publisher: string, overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        prevPublisher(overrides?: CallOverrides): Promise<string>;
        publishContract(_publisher: string, _contractId: string, _publishMetadataUri: string, _compilerMetadataUri: string, _bytecodeHash: BytesLike, _implementation: string, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setPause(_pause: boolean, overrides?: CallOverrides): Promise<void>;
        setPublisherProfileUri(publisher: string, uri: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        unpublishContract(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractPublished(address,address,tuple)"(operator?: string | null, publisher?: string | null, publishedContract?: null): ContractPublishedEventFilter;
        ContractPublished(operator?: string | null, publisher?: string | null, publishedContract?: null): ContractPublishedEventFilter;
        "ContractUnpublished(address,address,string)"(operator?: string | null, publisher?: string | null, contractId?: string | null): ContractUnpublishedEventFilter;
        ContractUnpublished(operator?: string | null, publisher?: string | null, contractId?: string | null): ContractUnpublishedEventFilter;
        "Paused(bool)"(isPaused?: null): PausedEventFilter;
        Paused(isPaused?: null): PausedEventFilter;
        "PublisherProfileUpdated(address,string,string)"(publisher?: string | null, prevURI?: null, newURI?: null): PublisherProfileUpdatedEventFilter;
        PublisherProfileUpdated(publisher?: string | null, prevURI?: null, newURI?: null): PublisherProfileUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        getAllPublishedContracts(_publisher: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublishedContract(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublishedContractVersions(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublishedUriFromCompilerUri(compilerMetadataUri: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublisherProfileUri(publisher: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        prevPublisher(overrides?: CallOverrides): Promise<BigNumber>;
        publishContract(_publisher: string, _contractId: string, _publishMetadataUri: string, _compilerMetadataUri: string, _bytecodeHash: BytesLike, _implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPause(_pause: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPublisherProfileUri(publisher: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        unpublishContract(_publisher: string, _contractId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllPublishedContracts(_publisher: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublishedContract(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublishedContractVersions(_publisher: string, _contractId: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublishedUriFromCompilerUri(compilerMetadataUri: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublisherProfileUri(publisher: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        prevPublisher(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publishContract(_publisher: string, _contractId: string, _publishMetadataUri: string, _compilerMetadataUri: string, _bytecodeHash: BytesLike, _implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPause(_pause: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPublisherProfileUri(publisher: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpublishContract(_publisher: string, _contractId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ContractPublisher.d.ts.map