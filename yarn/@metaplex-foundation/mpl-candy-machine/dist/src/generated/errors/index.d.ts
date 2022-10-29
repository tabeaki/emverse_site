declare type ErrorWithCode = Error & {
    code: number;
};
declare type MaybeErrorWithCode = ErrorWithCode | null | undefined;
export declare class IncorrectOwnerError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class UninitializedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MintMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class IndexGreaterThanLengthError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NumericalOverflowErrorError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class TooManyCreatorsError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class UuidMustBeExactly6LengthError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NotEnoughTokensError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NotEnoughSOLError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class TokenTransferFailedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CandyMachineEmptyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CandyMachineNotLiveError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class HiddenSettingsConfigsDoNotHaveConfigLinesError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CannotChangeNumberOfLinesError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class DerivedKeyInvalidError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class PublicKeyMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoWhitelistTokenError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class TokenBurnFailedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class GatewayAppMissingError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class GatewayTokenMissingError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class GatewayTokenExpireTimeInvalidError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NetworkExpireFeatureMissingError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CannotFindUsableConfigLineError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidStringError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class SuspiciousTransactionError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CannotSwitchToHiddenSettingsError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class IncorrectSlotHashesPubkeyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class IncorrectCollectionAuthorityError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MismatchedCollectionPDAError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MismatchedCollectionMintError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class SlotHashesEmptyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MetadataAccountMustBeEmptyError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MissingSetCollectionDuringMintError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoChangingCollectionDuringMintError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CandyCollectionRequiresRetainAuthorityError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class GatewayProgramErrorError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoChangingFreezeDuringMintError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoChangingAuthorityWithCollectionError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoChangingTokenWithFreezeError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidThawNftError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class IncorrectRemainingAccountsLenError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MissingFreezeAtaError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class IncorrectFreezeAtaError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class FreezePDAMismatchError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class EnteredFreezeIsMoreThanMaxFreezeError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoWithdrawWithFreezeError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoWithdrawWithFrozenFundsError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class MissingRemoveFreezeTokenAccountsError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidFreezeWithdrawTokenAddressError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class NoUnlockWithNFTsStillFrozenError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class SizedCollectionMetadataMustBeMutableError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CannotSwitchFromHiddenSettingsError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare function errorFromCode(code: number): MaybeErrorWithCode;
export declare function errorFromName(name: string): MaybeErrorWithCode;
export {};
