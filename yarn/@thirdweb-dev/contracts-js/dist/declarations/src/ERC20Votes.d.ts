import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace ERC20Votes {
    type CheckpointStruct = {
        fromBlock: BigNumberish;
        votes: BigNumberish;
    };
    type CheckpointStructOutput = [number, BigNumber] & {
        fromBlock: number;
        votes: BigNumber;
    };
}
export interface ERC20VotesInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "checkpoints(address,uint32)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "delegate(address)": FunctionFragment;
        "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "getPastTotalSupply(uint256)": FunctionFragment;
        "getPastVotes(address,uint256)": FunctionFragment;
        "getVotes(address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "numCheckpoints(address)": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "checkpoints" | "decimals" | "decreaseAllowance" | "delegate" | "delegateBySig" | "delegates" | "getPastTotalSupply" | "getPastVotes" | "getVotes" | "increaseAllowance" | "name" | "nonces" | "numCheckpoints" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "checkpoints", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegate", values: [string]): string;
    encodeFunctionData(functionFragment: "delegateBySig", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "delegates", values: [string]): string;
    encodeFunctionData(functionFragment: "getPastTotalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPastVotes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [string]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "numCheckpoints", values: [string]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "DelegateChanged(address,address,address)": EventFragment;
        "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface DelegateChangedEventObject {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}
export declare type DelegateChangedEvent = TypedEvent<[
    string,
    string,
    string
], DelegateChangedEventObject>;
export declare type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;
export interface DelegateVotesChangedEventObject {
    delegate: string;
    previousBalance: BigNumber;
    newBalance: BigNumber;
}
export declare type DelegateVotesChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DelegateVotesChangedEventObject>;
export declare type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ERC20Votes extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC20VotesInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<[ERC20Votes.CheckpointStructOutput]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegates(account: string, overrides?: CallOverrides): Promise<[string]>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<[number]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<ERC20Votes.CheckpointStructOutput>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegate(delegatee: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegates(account: string, overrides?: CallOverrides): Promise<string>;
    getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    numCheckpoints(account: string, overrides?: CallOverrides): Promise<number>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<ERC20Votes.CheckpointStructOutput>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegates(account: string, overrides?: CallOverrides): Promise<string>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<number>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "DelegateChanged(address,address,address)"(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        DelegateChanged(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        "DelegateVotesChanged(address,uint256,uint256)"(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        DelegateVotesChanged(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegates(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegates(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotes(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC20Votes.d.ts.map