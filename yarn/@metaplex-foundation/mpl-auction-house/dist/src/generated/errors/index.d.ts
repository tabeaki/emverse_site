declare type ErrorWithCode = Error & {
    code: number;
};
declare type MaybeErrorWithCode = ErrorWithCode | null | undefined;
export declare class PublicKeyMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidMintAuthorityError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class UninitializedAccountError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class IncorrectOwnerError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class PublicKeysShouldBeUniqueError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class StatementFalseError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NotRentExemptError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NumericalOverflowError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class ExpectedSolAccountError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CannotExchangeSOLForSolError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class SOLWalletMustSignError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CannotTakeThisActionWithoutAuctionHouseSignOffError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoPayerPresentError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class DerivedKeyInvalidError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataDoesntExistError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidTokenAmountError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class BothPartiesNeedToAgreeToSaleError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class SaleRequiresSignerError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class OldSellerNotInitializedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class SellerATACannotHaveDelegateError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class BuyerATACannotHaveDelegateError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoValidSignerPresentError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidBasisPointsError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class TradeStateDoesntExistError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class TradeStateIsNotEmptyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class ReceiptIsEmptyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InstructionMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidAuctioneerError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MissingAuctioneerScopeError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MustUseAuctioneerHandlerError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoAuctioneerProgramSetError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class TooManyScopesError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class AuctionHouseNotDelegatedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class BumpSeedNotInHashMapError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class EscrowUnderRentExemptionError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidSeedsOrAuctionHouseNotDelegatedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class BuyerTradeStateNotValidError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MissingElementForPartialOrderError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NotEnoughTokensAvailableForPurchaseError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class PartialPriceMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class AuctionHouseAlreadyDelegatedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class AuctioneerAuthorityMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InsufficientFundsError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare function errorFromCode(code: number): MaybeErrorWithCode;
export declare function errorFromName(name: string): MaybeErrorWithCode;
export {};