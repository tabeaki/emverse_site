import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace IDropSinglePhase1155 {
    type AllowlistProofStruct = {
        proof: BytesLike[];
        maxQuantityInAllowlist: BigNumberish;
    };
    type AllowlistProofStructOutput = [string[], BigNumber] & {
        proof: string[];
        maxQuantityInAllowlist: BigNumber;
    };
}
export interface ERC1155DropInterface extends utils.Interface {
    functions: {
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "claim(address,uint256,uint256,address,uint256,(bytes32[],uint256),bytes)": FunctionFragment;
        "claimCondition(uint256)": FunctionFragment;
        "contractURI()": FunctionFragment;
        "encryptDecrypt(bytes,bytes)": FunctionFragment;
        "encryptedData(uint256)": FunctionFragment;
        "getBaseURICount()": FunctionFragment;
        "getBatchIdAtIndex(uint256)": FunctionFragment;
        "getClaimTimestamp(uint256,address)": FunctionFragment;
        "getDefaultRoyaltyInfo()": FunctionFragment;
        "getRevealURI(uint256,bytes)": FunctionFragment;
        "getRoyaltyInfoForToken(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isEncryptedBatch(uint256)": FunctionFragment;
        "lazyMint(uint256,string,bytes)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "name()": FunctionFragment;
        "nextTokenIdToMint()": FunctionFragment;
        "owner()": FunctionFragment;
        "primarySaleRecipient()": FunctionFragment;
        "reveal(uint256,bytes)": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setClaimConditions(uint256,(uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address),bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setDefaultRoyaltyInfo(address,uint256)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPrimarySaleRecipient(address)": FunctionFragment;
        "setRoyaltyInfoForToken(uint256,address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply(uint256)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
        "verifyClaim(uint256,address,uint256,address,uint256,bool)": FunctionFragment;
        "verifyClaimMerkleProof(uint256,address,uint256,(bytes32[],uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "balanceOfBatch" | "claim" | "claimCondition" | "contractURI" | "encryptDecrypt" | "encryptedData" | "getBaseURICount" | "getBatchIdAtIndex" | "getClaimTimestamp" | "getDefaultRoyaltyInfo" | "getRevealURI" | "getRoyaltyInfoForToken" | "isApprovedForAll" | "isEncryptedBatch" | "lazyMint" | "multicall" | "name" | "nextTokenIdToMint" | "owner" | "primarySaleRecipient" | "reveal" | "royaltyInfo" | "safeBatchTransferFrom" | "safeTransferFrom" | "setApprovalForAll" | "setClaimConditions" | "setContractURI" | "setDefaultRoyaltyInfo" | "setOwner" | "setPrimarySaleRecipient" | "setRoyaltyInfoForToken" | "supportsInterface" | "symbol" | "totalSupply" | "uri" | "verifyClaim" | "verifyClaimMerkleProof"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        IDropSinglePhase1155.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "encryptDecrypt", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "encryptedData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBaseURICount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBatchIdAtIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getClaimTimestamp", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getDefaultRoyaltyInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRevealURI", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoyaltyInfoForToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isEncryptedBatch", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lazyMint", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenIdToMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "primarySaleRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "reveal", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [BigNumberish, IClaimCondition.ClaimConditionStruct, boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setDefaultRoyaltyInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPrimarySaleRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setRoyaltyInfoForToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [BigNumberish, string, BigNumberish, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "verifyClaimMerkleProof", values: [
        BigNumberish,
        string,
        BigNumberish,
        IDropSinglePhase1155.AllowlistProofStruct
    ]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encryptDecrypt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encryptedData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBaseURICount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBatchIdAtIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRevealURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isEncryptedBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lazyMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenIdToMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaimMerkleProof", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ClaimConditionUpdated(uint256,tuple,bool)": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "DefaultRoyalty(address,uint256)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "RoyaltyForToken(uint256,address,uint256)": EventFragment;
        "TokenURIRevealed(uint256,string)": EventFragment;
        "TokensClaimed(address,address,uint256,uint256)": EventFragment;
        "TokensLazyMinted(uint256,uint256,string,bytes)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimConditionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyForToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenURIRevealed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensLazyMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}
export interface ApprovalForAllEventObject {
    _owner: string;
    _operator: string;
    _approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface ClaimConditionUpdatedEventObject {
    tokenId: BigNumber;
    condition: IClaimCondition.ClaimConditionStructOutput;
    resetEligibility: boolean;
}
export declare type ClaimConditionUpdatedEvent = TypedEvent<[
    BigNumber,
    IClaimCondition.ClaimConditionStructOutput,
    boolean
], ClaimConditionUpdatedEventObject>;
export declare type ClaimConditionUpdatedEventFilter = TypedEventFilter<ClaimConditionUpdatedEvent>;
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export declare type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export declare type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface DefaultRoyaltyEventObject {
    newRoyaltyRecipient: string;
    newRoyaltyBps: BigNumber;
}
export declare type DefaultRoyaltyEvent = TypedEvent<[
    string,
    BigNumber
], DefaultRoyaltyEventObject>;
export declare type DefaultRoyaltyEventFilter = TypedEventFilter<DefaultRoyaltyEvent>;
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export declare type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export declare type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface PrimarySaleRecipientUpdatedEventObject {
    recipient: string;
}
export declare type PrimarySaleRecipientUpdatedEvent = TypedEvent<[
    string
], PrimarySaleRecipientUpdatedEventObject>;
export declare type PrimarySaleRecipientUpdatedEventFilter = TypedEventFilter<PrimarySaleRecipientUpdatedEvent>;
export interface RoyaltyForTokenEventObject {
    tokenId: BigNumber;
    royaltyRecipient: string;
    royaltyBps: BigNumber;
}
export declare type RoyaltyForTokenEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], RoyaltyForTokenEventObject>;
export declare type RoyaltyForTokenEventFilter = TypedEventFilter<RoyaltyForTokenEvent>;
export interface TokenURIRevealedEventObject {
    index: BigNumber;
    revealedURI: string;
}
export declare type TokenURIRevealedEvent = TypedEvent<[
    BigNumber,
    string
], TokenURIRevealedEventObject>;
export declare type TokenURIRevealedEventFilter = TypedEventFilter<TokenURIRevealedEvent>;
export interface TokensClaimedEventObject {
    claimer: string;
    receiver: string;
    tokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export declare type TokensClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export declare type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface TokensLazyMintedEventObject {
    startTokenId: BigNumber;
    endTokenId: BigNumber;
    baseURI: string;
    encryptedBaseURI: string;
}
export declare type TokensLazyMintedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string
], TokensLazyMintedEventObject>;
export declare type TokensLazyMintedEventFilter = TypedEventFilter<TokensLazyMintedEvent>;
export interface TransferBatchEventObject {
    _operator: string;
    _from: string;
    _to: string;
    _ids: BigNumber[];
    _values: BigNumber[];
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
    _operator: string;
    _from: string;
    _to: string;
    _id: BigNumber;
    _value: BigNumber;
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
    _value: string;
    _id: BigNumber;
}
export declare type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;
export declare type URIEventFilter = TypedEventFilter<URIEvent>;
export interface ERC1155Drop extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1155DropInterface;
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
        balanceOf(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        }>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        encryptedData(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getBaseURICount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getClaimTimestamp(_tokenId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimedAt: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            revealedURI: string;
        }>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        isApprovedForAll(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[boolean]>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<[string]>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(_tokenId: BigNumberish, _condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        verifyClaim(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<[void]>;
        verifyClaimMerkleProof(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
    };
    balanceOf(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
    }>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<string>;
    encryptedData(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
    getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getClaimTimestamp(_tokenId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        lastClaimedAt: BigNumber;
        nextValidClaimTimestamp: BigNumber;
    }>;
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
    isApprovedForAll(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;
    isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
    reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        receiver: string;
        royaltyAmount: BigNumber;
    }>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(_tokenId: BigNumberish, _condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    verifyClaim(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
    verifyClaimMerkleProof(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber
    ] & {
        validMerkleProof: boolean;
        merkleProofIndex: BigNumber;
    }>;
    callStatic: {
        balanceOf(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        }>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<string>;
        encryptedData(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimTimestamp(_tokenId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimedAt: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        isApprovedForAll(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        name(overrides?: CallOverrides): Promise<string>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<string>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(_tokenId: BigNumberish, _condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        verifyClaim(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
        verifyClaimMerkleProof(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(_owner?: string | null, _operator?: string | null, _approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(_owner?: string | null, _operator?: string | null, _approved?: null): ApprovalForAllEventFilter;
        "ClaimConditionUpdated(uint256,tuple,bool)"(tokenId?: BigNumberish | null, condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        ClaimConditionUpdated(tokenId?: BigNumberish | null, condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "DefaultRoyalty(address,uint256)"(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        DefaultRoyalty(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        "OwnerUpdated(address,address)"(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        "PrimarySaleRecipientUpdated(address)"(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        PrimarySaleRecipientUpdated(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        "RoyaltyForToken(uint256,address,uint256)"(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        RoyaltyForToken(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        "TokenURIRevealed(uint256,string)"(index?: BigNumberish | null, revealedURI?: null): TokenURIRevealedEventFilter;
        TokenURIRevealed(index?: BigNumberish | null, revealedURI?: null): TokenURIRevealedEventFilter;
        "TokensClaimed(address,address,uint256,uint256)"(claimer?: string | null, receiver?: string | null, tokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimer?: string | null, receiver?: string | null, tokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        "TokensLazyMinted(uint256,uint256,string,bytes)"(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
        TokensLazyMinted(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(_operator?: string | null, _from?: string | null, _to?: string | null, _ids?: null, _values?: null): TransferBatchEventFilter;
        TransferBatch(_operator?: string | null, _from?: string | null, _to?: string | null, _ids?: null, _values?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(_operator?: string | null, _from?: string | null, _to?: string | null, _id?: null, _value?: null): TransferSingleEventFilter;
        TransferSingle(_operator?: string | null, _from?: string | null, _to?: string | null, _id?: null, _value?: null): TransferSingleEventFilter;
        "URI(string,uint256)"(_value?: null, _id?: BigNumberish | null): URIEventFilter;
        URI(_value?: null, _id?: BigNumberish | null): URIEventFilter;
    };
    estimateGas: {
        balanceOf(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        encryptedData(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimTimestamp(_tokenId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(_tokenId: BigNumberish, _condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        verifyClaim(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        verifyClaimMerkleProof(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encryptedData(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBaseURICount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimTimestamp(_tokenId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(_tokenId: BigNumberish, _condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyClaim(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyClaimMerkleProof(_tokenId: BigNumberish, _claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC1155Drop.d.ts.map