import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
export interface SplitInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "contractType()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "contractVersion()": FunctionFragment;
        "distribute(address)": FunctionFragment;
        "distribute()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,string,address[],address[],uint256[])": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "payee(uint256)": FunctionFragment;
        "payeeCount()": FunctionFragment;
        "release(address)": FunctionFragment;
        "release(address,address)": FunctionFragment;
        "released(address,address)": FunctionFragment;
        "released(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "shares(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalReleased(address)": FunctionFragment;
        "totalReleased()": FunctionFragment;
        "totalShares()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "contractType" | "contractURI" | "contractVersion" | "distribute(address)" | "distribute()" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "initialize" | "isTrustedForwarder" | "multicall" | "payee" | "payeeCount" | "release(address)" | "release(address,address)" | "released(address,address)" | "released(address)" | "renounceRole" | "revokeRole" | "setContractURI" | "shares" | "supportsInterface" | "totalReleased(address)" | "totalReleased()" | "totalShares"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "distribute(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "distribute()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "payeeCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "release(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "release(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "released(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "released(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "shares", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "totalReleased(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "totalReleased()", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalShares", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payeeCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "released(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "released(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalReleased(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalReleased()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalShares", data: BytesLike): Result;
    events: {
        "ERC20PaymentReleased(address,address,uint256)": EventFragment;
        "PayeeAdded(address,uint256)": EventFragment;
        "PaymentReceived(address,uint256)": EventFragment;
        "PaymentReleased(address,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ERC20PaymentReleased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface ERC20PaymentReleasedEventObject {
    token: string;
    to: string;
    amount: BigNumber;
}
export declare type ERC20PaymentReleasedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ERC20PaymentReleasedEventObject>;
export declare type ERC20PaymentReleasedEventFilter = TypedEventFilter<ERC20PaymentReleasedEvent>;
export interface PayeeAddedEventObject {
    account: string;
    shares: BigNumber;
}
export declare type PayeeAddedEvent = TypedEvent<[
    string,
    BigNumber
], PayeeAddedEventObject>;
export declare type PayeeAddedEventFilter = TypedEventFilter<PayeeAddedEvent>;
export interface PaymentReceivedEventObject {
    from: string;
    amount: BigNumber;
}
export declare type PaymentReceivedEvent = TypedEvent<[
    string,
    BigNumber
], PaymentReceivedEventObject>;
export declare type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;
export interface PaymentReleasedEventObject {
    to: string;
    amount: BigNumber;
}
export declare type PaymentReleasedEvent = TypedEvent<[
    string,
    BigNumber
], PaymentReleasedEventObject>;
export declare type PaymentReleasedEventFilter = TypedEventFilter<PaymentReleasedEvent>;
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
export interface Split extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SplitInterface;
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
        contractType(overrides?: CallOverrides): Promise<[string]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        contractVersion(overrides?: CallOverrides): Promise<[number]>;
        "distribute(address)"(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "distribute()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _payees: string[], _shares: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        payeeCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        "release(address)"(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "release(address,address)"(token: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        shares(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "totalReleased()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    contractType(overrides?: CallOverrides): Promise<string>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    contractVersion(overrides?: CallOverrides): Promise<number>;
    "distribute(address)"(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "distribute()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _payees: string[], _shares: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    payeeCount(overrides?: CallOverrides): Promise<BigNumber>;
    "release(address)"(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "release(address,address)"(token: string, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
    "released(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;
    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        contractType(overrides?: CallOverrides): Promise<string>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        contractVersion(overrides?: CallOverrides): Promise<number>;
        "distribute(address)"(token: string, overrides?: CallOverrides): Promise<void>;
        "distribute()"(overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _payees: string[], _shares: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        payeeCount(overrides?: CallOverrides): Promise<BigNumber>;
        "release(address)"(account: string, overrides?: CallOverrides): Promise<void>;
        "release(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<void>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ERC20PaymentReleased(address,address,uint256)"(token?: string | null, to?: null, amount?: null): ERC20PaymentReleasedEventFilter;
        ERC20PaymentReleased(token?: string | null, to?: null, amount?: null): ERC20PaymentReleasedEventFilter;
        "PayeeAdded(address,uint256)"(account?: null, shares?: null): PayeeAddedEventFilter;
        PayeeAdded(account?: null, shares?: null): PayeeAddedEventFilter;
        "PaymentReceived(address,uint256)"(from?: null, amount?: null): PaymentReceivedEventFilter;
        PaymentReceived(from?: null, amount?: null): PaymentReceivedEventFilter;
        "PaymentReleased(address,uint256)"(to?: null, amount?: null): PaymentReleasedEventFilter;
        PaymentReleased(to?: null, amount?: null): PaymentReleasedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        "distribute(address)"(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "distribute()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _payees: string[], _shares: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        payeeCount(overrides?: CallOverrides): Promise<BigNumber>;
        "release(address)"(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "release(address,address)"(token: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "distribute(address)"(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "distribute()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _payees: string[], _shares: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payeeCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "release(address)"(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "release(address,address)"(token: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        shares(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Split.d.ts.map