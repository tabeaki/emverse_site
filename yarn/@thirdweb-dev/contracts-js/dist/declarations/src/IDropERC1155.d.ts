import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace IDropClaimCondition {
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
export interface IDropERC1155Interface extends utils.Interface {
    functions: {
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "claim(address,uint256,uint256,address,uint256,bytes32[],uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "lazyMint(uint256,string)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setClaimConditions(uint256,(uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address)[],bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "balanceOfBatch" | "claim" | "isApprovedForAll" | "lazyMint" | "safeBatchTransferFrom" | "safeTransferFrom" | "setApprovalForAll" | "setClaimConditions" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike[],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "lazyMint", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [BigNumberish, IDropClaimCondition.ClaimConditionStruct[], boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lazyMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ClaimConditionsUpdated(uint256,tuple[])": EventFragment;
        "MaxTotalSupplyUpdated(uint256,uint256)": EventFragment;
        "MaxWalletClaimCountUpdated(uint256,uint256)": EventFragment;
        "SaleRecipientForTokenUpdated(uint256,address)": EventFragment;
        "TokensClaimed(uint256,uint256,address,address,uint256)": EventFragment;
        "TokensLazyMinted(uint256,uint256,string)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
        "WalletClaimCountUpdated(uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimConditionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxTotalSupplyUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxWalletClaimCountUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SaleRecipientForTokenUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensLazyMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WalletClaimCountUpdated"): EventFragment;
}
export interface ApprovalForAllEventObject {
    account: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface ClaimConditionsUpdatedEventObject {
    tokenId: BigNumber;
    claimConditions: IDropClaimCondition.ClaimConditionStructOutput[];
}
export declare type ClaimConditionsUpdatedEvent = TypedEvent<[
    BigNumber,
    IDropClaimCondition.ClaimConditionStructOutput[]
], ClaimConditionsUpdatedEventObject>;
export declare type ClaimConditionsUpdatedEventFilter = TypedEventFilter<ClaimConditionsUpdatedEvent>;
export interface MaxTotalSupplyUpdatedEventObject {
    tokenId: BigNumber;
    maxTotalSupply: BigNumber;
}
export declare type MaxTotalSupplyUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MaxTotalSupplyUpdatedEventObject>;
export declare type MaxTotalSupplyUpdatedEventFilter = TypedEventFilter<MaxTotalSupplyUpdatedEvent>;
export interface MaxWalletClaimCountUpdatedEventObject {
    tokenId: BigNumber;
    count: BigNumber;
}
export declare type MaxWalletClaimCountUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MaxWalletClaimCountUpdatedEventObject>;
export declare type MaxWalletClaimCountUpdatedEventFilter = TypedEventFilter<MaxWalletClaimCountUpdatedEvent>;
export interface SaleRecipientForTokenUpdatedEventObject {
    tokenId: BigNumber;
    saleRecipient: string;
}
export declare type SaleRecipientForTokenUpdatedEvent = TypedEvent<[
    BigNumber,
    string
], SaleRecipientForTokenUpdatedEventObject>;
export declare type SaleRecipientForTokenUpdatedEventFilter = TypedEventFilter<SaleRecipientForTokenUpdatedEvent>;
export interface TokensClaimedEventObject {
    claimConditionIndex: BigNumber;
    tokenId: BigNumber;
    claimer: string;
    receiver: string;
    quantityClaimed: BigNumber;
}
export declare type TokensClaimedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber
], TokensClaimedEventObject>;
export declare type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface TokensLazyMintedEventObject {
    startTokenId: BigNumber;
    endTokenId: BigNumber;
    baseURI: string;
}
export declare type TokensLazyMintedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], TokensLazyMintedEventObject>;
export declare type TokensLazyMintedEventFilter = TypedEventFilter<TokensLazyMintedEvent>;
export interface TransferBatchEventObject {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
export declare type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], TransferBatchEventObject>;
export declare type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
export interface TransferSingleEventObject {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
export declare type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSingleEventObject>;
export declare type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
export interface URIEventObject {
    value: string;
    id: BigNumber;
}
export declare type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;
export declare type URIEventFilter = TypedEventFilter<URIEvent>;
export interface WalletClaimCountUpdatedEventObject {
    tokenId: BigNumber;
    wallet: string;
    count: BigNumber;
}
export declare type WalletClaimCountUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], WalletClaimCountUpdatedEventObject>;
export declare type WalletClaimCountUpdatedEventFilter = TypedEventFilter<WalletClaimCountUpdatedEvent>;
export interface IDropERC1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDropERC1155Interface;
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
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, proofs: BytesLike[], proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(tokenId: BigNumberish, phases: IDropClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, proofs: BytesLike[], proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    lazyMint(amount: BigNumberish, baseURIForTokens: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(tokenId: BigNumberish, phases: IDropClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, proofs: BytesLike[], proofMaxQuantityPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, overrides?: CallOverrides): Promise<void>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(tokenId: BigNumberish, phases: IDropClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "ClaimConditionsUpdated(uint256,tuple[])"(tokenId?: BigNumberish | null, claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        ClaimConditionsUpdated(tokenId?: BigNumberish | null, claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        "MaxTotalSupplyUpdated(uint256,uint256)"(tokenId?: null, maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
        MaxTotalSupplyUpdated(tokenId?: null, maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
        "MaxWalletClaimCountUpdated(uint256,uint256)"(tokenId?: null, count?: null): MaxWalletClaimCountUpdatedEventFilter;
        MaxWalletClaimCountUpdated(tokenId?: null, count?: null): MaxWalletClaimCountUpdatedEventFilter;
        "SaleRecipientForTokenUpdated(uint256,address)"(tokenId?: BigNumberish | null, saleRecipient?: null): SaleRecipientForTokenUpdatedEventFilter;
        SaleRecipientForTokenUpdated(tokenId?: BigNumberish | null, saleRecipient?: null): SaleRecipientForTokenUpdatedEventFilter;
        "TokensClaimed(uint256,uint256,address,address,uint256)"(claimConditionIndex?: BigNumberish | null, tokenId?: BigNumberish | null, claimer?: string | null, receiver?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimConditionIndex?: BigNumberish | null, tokenId?: BigNumberish | null, claimer?: string | null, receiver?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        "TokensLazyMinted(uint256,uint256,string)"(startTokenId?: null, endTokenId?: null, baseURI?: null): TokensLazyMintedEventFilter;
        TokensLazyMinted(startTokenId?: null, endTokenId?: null, baseURI?: null): TokensLazyMintedEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        TransferBatch(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        TransferSingle(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        "URI(string,uint256)"(value?: null, id?: BigNumberish | null): URIEventFilter;
        URI(value?: null, id?: BigNumberish | null): URIEventFilter;
        "WalletClaimCountUpdated(uint256,address,uint256)"(tokenId?: null, wallet?: string | null, count?: null): WalletClaimCountUpdatedEventFilter;
        WalletClaimCountUpdated(tokenId?: null, wallet?: string | null, count?: null): WalletClaimCountUpdatedEventFilter;
    };
    estimateGas: {
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, proofs: BytesLike[], proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(tokenId: BigNumberish, phases: IDropClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, proofs: BytesLike[], proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(tokenId: BigNumberish, phases: IDropClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDropERC1155.d.ts.map