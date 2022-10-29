"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorFromName = exports.errorFromCode = exports.InsufficientFundsError = exports.AuctioneerAuthorityMismatchError = exports.AuctionHouseAlreadyDelegatedError = exports.PartialPriceMismatchError = exports.NotEnoughTokensAvailableForPurchaseError = exports.MissingElementForPartialOrderError = exports.BuyerTradeStateNotValidError = exports.InvalidSeedsOrAuctionHouseNotDelegatedError = exports.EscrowUnderRentExemptionError = exports.BumpSeedNotInHashMapError = exports.AuctionHouseNotDelegatedError = exports.TooManyScopesError = exports.NoAuctioneerProgramSetError = exports.MustUseAuctioneerHandlerError = exports.MissingAuctioneerScopeError = exports.InvalidAuctioneerError = exports.InstructionMismatchError = exports.ReceiptIsEmptyError = exports.TradeStateIsNotEmptyError = exports.TradeStateDoesntExistError = exports.InvalidBasisPointsError = exports.NoValidSignerPresentError = exports.BuyerATACannotHaveDelegateError = exports.SellerATACannotHaveDelegateError = exports.OldSellerNotInitializedError = exports.SaleRequiresSignerError = exports.CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError = exports.BothPartiesNeedToAgreeToSaleError = exports.InvalidTokenAmountError = exports.MetadataDoesntExistError = exports.DerivedKeyInvalidError = exports.NoPayerPresentError = exports.CannotTakeThisActionWithoutAuctionHouseSignOffError = exports.SOLWalletMustSignError = exports.CannotExchangeSOLForSolError = exports.ExpectedSolAccountError = exports.NumericalOverflowError = exports.NotRentExemptError = exports.StatementFalseError = exports.PublicKeysShouldBeUniqueError = exports.IncorrectOwnerError = exports.UninitializedAccountError = exports.InvalidMintAuthorityError = exports.PublicKeyMismatchError = void 0;
const createErrorFromCodeLookup = new Map();
const createErrorFromNameLookup = new Map();
class PublicKeyMismatchError extends Error {
    constructor() {
        super('PublicKeyMismatch');
        this.code = 0x1770;
        this.name = 'PublicKeyMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PublicKeyMismatchError);
        }
    }
}
exports.PublicKeyMismatchError = PublicKeyMismatchError;
createErrorFromCodeLookup.set(0x1770, () => new PublicKeyMismatchError());
createErrorFromNameLookup.set('PublicKeyMismatch', () => new PublicKeyMismatchError());
class InvalidMintAuthorityError extends Error {
    constructor() {
        super('InvalidMintAuthority');
        this.code = 0x1771;
        this.name = 'InvalidMintAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidMintAuthorityError);
        }
    }
}
exports.InvalidMintAuthorityError = InvalidMintAuthorityError;
createErrorFromCodeLookup.set(0x1771, () => new InvalidMintAuthorityError());
createErrorFromNameLookup.set('InvalidMintAuthority', () => new InvalidMintAuthorityError());
class UninitializedAccountError extends Error {
    constructor() {
        super('UninitializedAccount');
        this.code = 0x1772;
        this.name = 'UninitializedAccount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UninitializedAccountError);
        }
    }
}
exports.UninitializedAccountError = UninitializedAccountError;
createErrorFromCodeLookup.set(0x1772, () => new UninitializedAccountError());
createErrorFromNameLookup.set('UninitializedAccount', () => new UninitializedAccountError());
class IncorrectOwnerError extends Error {
    constructor() {
        super('IncorrectOwner');
        this.code = 0x1773;
        this.name = 'IncorrectOwner';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, IncorrectOwnerError);
        }
    }
}
exports.IncorrectOwnerError = IncorrectOwnerError;
createErrorFromCodeLookup.set(0x1773, () => new IncorrectOwnerError());
createErrorFromNameLookup.set('IncorrectOwner', () => new IncorrectOwnerError());
class PublicKeysShouldBeUniqueError extends Error {
    constructor() {
        super('PublicKeysShouldBeUnique');
        this.code = 0x1774;
        this.name = 'PublicKeysShouldBeUnique';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PublicKeysShouldBeUniqueError);
        }
    }
}
exports.PublicKeysShouldBeUniqueError = PublicKeysShouldBeUniqueError;
createErrorFromCodeLookup.set(0x1774, () => new PublicKeysShouldBeUniqueError());
createErrorFromNameLookup.set('PublicKeysShouldBeUnique', () => new PublicKeysShouldBeUniqueError());
class StatementFalseError extends Error {
    constructor() {
        super('StatementFalse');
        this.code = 0x1775;
        this.name = 'StatementFalse';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, StatementFalseError);
        }
    }
}
exports.StatementFalseError = StatementFalseError;
createErrorFromCodeLookup.set(0x1775, () => new StatementFalseError());
createErrorFromNameLookup.set('StatementFalse', () => new StatementFalseError());
class NotRentExemptError extends Error {
    constructor() {
        super('NotRentExempt');
        this.code = 0x1776;
        this.name = 'NotRentExempt';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotRentExemptError);
        }
    }
}
exports.NotRentExemptError = NotRentExemptError;
createErrorFromCodeLookup.set(0x1776, () => new NotRentExemptError());
createErrorFromNameLookup.set('NotRentExempt', () => new NotRentExemptError());
class NumericalOverflowError extends Error {
    constructor() {
        super('NumericalOverflow');
        this.code = 0x1777;
        this.name = 'NumericalOverflow';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NumericalOverflowError);
        }
    }
}
exports.NumericalOverflowError = NumericalOverflowError;
createErrorFromCodeLookup.set(0x1777, () => new NumericalOverflowError());
createErrorFromNameLookup.set('NumericalOverflow', () => new NumericalOverflowError());
class ExpectedSolAccountError extends Error {
    constructor() {
        super('Expected a sol account but got an spl token account instead');
        this.code = 0x1778;
        this.name = 'ExpectedSolAccount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ExpectedSolAccountError);
        }
    }
}
exports.ExpectedSolAccountError = ExpectedSolAccountError;
createErrorFromCodeLookup.set(0x1778, () => new ExpectedSolAccountError());
createErrorFromNameLookup.set('ExpectedSolAccount', () => new ExpectedSolAccountError());
class CannotExchangeSOLForSolError extends Error {
    constructor() {
        super('Cannot exchange sol for sol');
        this.code = 0x1779;
        this.name = 'CannotExchangeSOLForSol';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotExchangeSOLForSolError);
        }
    }
}
exports.CannotExchangeSOLForSolError = CannotExchangeSOLForSolError;
createErrorFromCodeLookup.set(0x1779, () => new CannotExchangeSOLForSolError());
createErrorFromNameLookup.set('CannotExchangeSOLForSol', () => new CannotExchangeSOLForSolError());
class SOLWalletMustSignError extends Error {
    constructor() {
        super('If paying with sol, sol wallet must be signer');
        this.code = 0x177a;
        this.name = 'SOLWalletMustSign';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, SOLWalletMustSignError);
        }
    }
}
exports.SOLWalletMustSignError = SOLWalletMustSignError;
createErrorFromCodeLookup.set(0x177a, () => new SOLWalletMustSignError());
createErrorFromNameLookup.set('SOLWalletMustSign', () => new SOLWalletMustSignError());
class CannotTakeThisActionWithoutAuctionHouseSignOffError extends Error {
    constructor() {
        super('Cannot take this action without auction house signing too');
        this.code = 0x177b;
        this.name = 'CannotTakeThisActionWithoutAuctionHouseSignOff';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotTakeThisActionWithoutAuctionHouseSignOffError);
        }
    }
}
exports.CannotTakeThisActionWithoutAuctionHouseSignOffError = CannotTakeThisActionWithoutAuctionHouseSignOffError;
createErrorFromCodeLookup.set(0x177b, () => new CannotTakeThisActionWithoutAuctionHouseSignOffError());
createErrorFromNameLookup.set('CannotTakeThisActionWithoutAuctionHouseSignOff', () => new CannotTakeThisActionWithoutAuctionHouseSignOffError());
class NoPayerPresentError extends Error {
    constructor() {
        super('No payer present on this txn');
        this.code = 0x177c;
        this.name = 'NoPayerPresent';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoPayerPresentError);
        }
    }
}
exports.NoPayerPresentError = NoPayerPresentError;
createErrorFromCodeLookup.set(0x177c, () => new NoPayerPresentError());
createErrorFromNameLookup.set('NoPayerPresent', () => new NoPayerPresentError());
class DerivedKeyInvalidError extends Error {
    constructor() {
        super('Derived key invalid');
        this.code = 0x177d;
        this.name = 'DerivedKeyInvalid';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DerivedKeyInvalidError);
        }
    }
}
exports.DerivedKeyInvalidError = DerivedKeyInvalidError;
createErrorFromCodeLookup.set(0x177d, () => new DerivedKeyInvalidError());
createErrorFromNameLookup.set('DerivedKeyInvalid', () => new DerivedKeyInvalidError());
class MetadataDoesntExistError extends Error {
    constructor() {
        super("Metadata doesn't exist");
        this.code = 0x177e;
        this.name = 'MetadataDoesntExist';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MetadataDoesntExistError);
        }
    }
}
exports.MetadataDoesntExistError = MetadataDoesntExistError;
createErrorFromCodeLookup.set(0x177e, () => new MetadataDoesntExistError());
createErrorFromNameLookup.set('MetadataDoesntExist', () => new MetadataDoesntExistError());
class InvalidTokenAmountError extends Error {
    constructor() {
        super('Invalid token amount');
        this.code = 0x177f;
        this.name = 'InvalidTokenAmount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidTokenAmountError);
        }
    }
}
exports.InvalidTokenAmountError = InvalidTokenAmountError;
createErrorFromCodeLookup.set(0x177f, () => new InvalidTokenAmountError());
createErrorFromNameLookup.set('InvalidTokenAmount', () => new InvalidTokenAmountError());
class BothPartiesNeedToAgreeToSaleError extends Error {
    constructor() {
        super('Both parties need to agree to this sale');
        this.code = 0x1780;
        this.name = 'BothPartiesNeedToAgreeToSale';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BothPartiesNeedToAgreeToSaleError);
        }
    }
}
exports.BothPartiesNeedToAgreeToSaleError = BothPartiesNeedToAgreeToSaleError;
createErrorFromCodeLookup.set(0x1780, () => new BothPartiesNeedToAgreeToSaleError());
createErrorFromNameLookup.set('BothPartiesNeedToAgreeToSale', () => new BothPartiesNeedToAgreeToSaleError());
class CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError extends Error {
    constructor() {
        super('Cannot match free sales unless the auction house or seller signs off');
        this.code = 0x1781;
        this.name = 'CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoff';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError);
        }
    }
}
exports.CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError = CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError;
createErrorFromCodeLookup.set(0x1781, () => new CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError());
createErrorFromNameLookup.set('CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoff', () => new CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoffError());
class SaleRequiresSignerError extends Error {
    constructor() {
        super('This sale requires a signer');
        this.code = 0x1782;
        this.name = 'SaleRequiresSigner';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, SaleRequiresSignerError);
        }
    }
}
exports.SaleRequiresSignerError = SaleRequiresSignerError;
createErrorFromCodeLookup.set(0x1782, () => new SaleRequiresSignerError());
createErrorFromNameLookup.set('SaleRequiresSigner', () => new SaleRequiresSignerError());
class OldSellerNotInitializedError extends Error {
    constructor() {
        super('Old seller not initialized');
        this.code = 0x1783;
        this.name = 'OldSellerNotInitialized';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, OldSellerNotInitializedError);
        }
    }
}
exports.OldSellerNotInitializedError = OldSellerNotInitializedError;
createErrorFromCodeLookup.set(0x1783, () => new OldSellerNotInitializedError());
createErrorFromNameLookup.set('OldSellerNotInitialized', () => new OldSellerNotInitializedError());
class SellerATACannotHaveDelegateError extends Error {
    constructor() {
        super('Seller ata cannot have a delegate set');
        this.code = 0x1784;
        this.name = 'SellerATACannotHaveDelegate';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, SellerATACannotHaveDelegateError);
        }
    }
}
exports.SellerATACannotHaveDelegateError = SellerATACannotHaveDelegateError;
createErrorFromCodeLookup.set(0x1784, () => new SellerATACannotHaveDelegateError());
createErrorFromNameLookup.set('SellerATACannotHaveDelegate', () => new SellerATACannotHaveDelegateError());
class BuyerATACannotHaveDelegateError extends Error {
    constructor() {
        super('Buyer ata cannot have a delegate set');
        this.code = 0x1785;
        this.name = 'BuyerATACannotHaveDelegate';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BuyerATACannotHaveDelegateError);
        }
    }
}
exports.BuyerATACannotHaveDelegateError = BuyerATACannotHaveDelegateError;
createErrorFromCodeLookup.set(0x1785, () => new BuyerATACannotHaveDelegateError());
createErrorFromNameLookup.set('BuyerATACannotHaveDelegate', () => new BuyerATACannotHaveDelegateError());
class NoValidSignerPresentError extends Error {
    constructor() {
        super('No valid signer present');
        this.code = 0x1786;
        this.name = 'NoValidSignerPresent';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoValidSignerPresentError);
        }
    }
}
exports.NoValidSignerPresentError = NoValidSignerPresentError;
createErrorFromCodeLookup.set(0x1786, () => new NoValidSignerPresentError());
createErrorFromNameLookup.set('NoValidSignerPresent', () => new NoValidSignerPresentError());
class InvalidBasisPointsError extends Error {
    constructor() {
        super('BP must be less than or equal to 10000');
        this.code = 0x1787;
        this.name = 'InvalidBasisPoints';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidBasisPointsError);
        }
    }
}
exports.InvalidBasisPointsError = InvalidBasisPointsError;
createErrorFromCodeLookup.set(0x1787, () => new InvalidBasisPointsError());
createErrorFromNameLookup.set('InvalidBasisPoints', () => new InvalidBasisPointsError());
class TradeStateDoesntExistError extends Error {
    constructor() {
        super('The trade state account does not exist');
        this.code = 0x1788;
        this.name = 'TradeStateDoesntExist';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TradeStateDoesntExistError);
        }
    }
}
exports.TradeStateDoesntExistError = TradeStateDoesntExistError;
createErrorFromCodeLookup.set(0x1788, () => new TradeStateDoesntExistError());
createErrorFromNameLookup.set('TradeStateDoesntExist', () => new TradeStateDoesntExistError());
class TradeStateIsNotEmptyError extends Error {
    constructor() {
        super('The trade state is not empty');
        this.code = 0x1789;
        this.name = 'TradeStateIsNotEmpty';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TradeStateIsNotEmptyError);
        }
    }
}
exports.TradeStateIsNotEmptyError = TradeStateIsNotEmptyError;
createErrorFromCodeLookup.set(0x1789, () => new TradeStateIsNotEmptyError());
createErrorFromNameLookup.set('TradeStateIsNotEmpty', () => new TradeStateIsNotEmptyError());
class ReceiptIsEmptyError extends Error {
    constructor() {
        super('The receipt is empty');
        this.code = 0x178a;
        this.name = 'ReceiptIsEmpty';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReceiptIsEmptyError);
        }
    }
}
exports.ReceiptIsEmptyError = ReceiptIsEmptyError;
createErrorFromCodeLookup.set(0x178a, () => new ReceiptIsEmptyError());
createErrorFromNameLookup.set('ReceiptIsEmpty', () => new ReceiptIsEmptyError());
class InstructionMismatchError extends Error {
    constructor() {
        super('The instruction does not match');
        this.code = 0x178b;
        this.name = 'InstructionMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InstructionMismatchError);
        }
    }
}
exports.InstructionMismatchError = InstructionMismatchError;
createErrorFromCodeLookup.set(0x178b, () => new InstructionMismatchError());
createErrorFromNameLookup.set('InstructionMismatch', () => new InstructionMismatchError());
class InvalidAuctioneerError extends Error {
    constructor() {
        super('Invalid Auctioneer for this Auction House instance.');
        this.code = 0x178c;
        this.name = 'InvalidAuctioneer';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidAuctioneerError);
        }
    }
}
exports.InvalidAuctioneerError = InvalidAuctioneerError;
createErrorFromCodeLookup.set(0x178c, () => new InvalidAuctioneerError());
createErrorFromNameLookup.set('InvalidAuctioneer', () => new InvalidAuctioneerError());
class MissingAuctioneerScopeError extends Error {
    constructor() {
        super('The Auctioneer does not have the correct scope for this action.');
        this.code = 0x178d;
        this.name = 'MissingAuctioneerScope';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MissingAuctioneerScopeError);
        }
    }
}
exports.MissingAuctioneerScopeError = MissingAuctioneerScopeError;
createErrorFromCodeLookup.set(0x178d, () => new MissingAuctioneerScopeError());
createErrorFromNameLookup.set('MissingAuctioneerScope', () => new MissingAuctioneerScopeError());
class MustUseAuctioneerHandlerError extends Error {
    constructor() {
        super('Must use auctioneer handler.');
        this.code = 0x178e;
        this.name = 'MustUseAuctioneerHandler';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MustUseAuctioneerHandlerError);
        }
    }
}
exports.MustUseAuctioneerHandlerError = MustUseAuctioneerHandlerError;
createErrorFromCodeLookup.set(0x178e, () => new MustUseAuctioneerHandlerError());
createErrorFromNameLookup.set('MustUseAuctioneerHandler', () => new MustUseAuctioneerHandlerError());
class NoAuctioneerProgramSetError extends Error {
    constructor() {
        super('No Auctioneer program set.');
        this.code = 0x178f;
        this.name = 'NoAuctioneerProgramSet';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoAuctioneerProgramSetError);
        }
    }
}
exports.NoAuctioneerProgramSetError = NoAuctioneerProgramSetError;
createErrorFromCodeLookup.set(0x178f, () => new NoAuctioneerProgramSetError());
createErrorFromNameLookup.set('NoAuctioneerProgramSet', () => new NoAuctioneerProgramSetError());
class TooManyScopesError extends Error {
    constructor() {
        super('Too many scopes.');
        this.code = 0x1790;
        this.name = 'TooManyScopes';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TooManyScopesError);
        }
    }
}
exports.TooManyScopesError = TooManyScopesError;
createErrorFromCodeLookup.set(0x1790, () => new TooManyScopesError());
createErrorFromNameLookup.set('TooManyScopes', () => new TooManyScopesError());
class AuctionHouseNotDelegatedError extends Error {
    constructor() {
        super('Auction House not delegated.');
        this.code = 0x1791;
        this.name = 'AuctionHouseNotDelegated';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AuctionHouseNotDelegatedError);
        }
    }
}
exports.AuctionHouseNotDelegatedError = AuctionHouseNotDelegatedError;
createErrorFromCodeLookup.set(0x1791, () => new AuctionHouseNotDelegatedError());
createErrorFromNameLookup.set('AuctionHouseNotDelegated', () => new AuctionHouseNotDelegatedError());
class BumpSeedNotInHashMapError extends Error {
    constructor() {
        super('Bump seed not in hash map.');
        this.code = 0x1792;
        this.name = 'BumpSeedNotInHashMap';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BumpSeedNotInHashMapError);
        }
    }
}
exports.BumpSeedNotInHashMapError = BumpSeedNotInHashMapError;
createErrorFromCodeLookup.set(0x1792, () => new BumpSeedNotInHashMapError());
createErrorFromNameLookup.set('BumpSeedNotInHashMap', () => new BumpSeedNotInHashMapError());
class EscrowUnderRentExemptionError extends Error {
    constructor() {
        super('The instruction would drain the escrow below rent exemption threshold');
        this.code = 0x1793;
        this.name = 'EscrowUnderRentExemption';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, EscrowUnderRentExemptionError);
        }
    }
}
exports.EscrowUnderRentExemptionError = EscrowUnderRentExemptionError;
createErrorFromCodeLookup.set(0x1793, () => new EscrowUnderRentExemptionError());
createErrorFromNameLookup.set('EscrowUnderRentExemption', () => new EscrowUnderRentExemptionError());
class InvalidSeedsOrAuctionHouseNotDelegatedError extends Error {
    constructor() {
        super('Invalid seeds or Auction House not delegated');
        this.code = 0x1794;
        this.name = 'InvalidSeedsOrAuctionHouseNotDelegated';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidSeedsOrAuctionHouseNotDelegatedError);
        }
    }
}
exports.InvalidSeedsOrAuctionHouseNotDelegatedError = InvalidSeedsOrAuctionHouseNotDelegatedError;
createErrorFromCodeLookup.set(0x1794, () => new InvalidSeedsOrAuctionHouseNotDelegatedError());
createErrorFromNameLookup.set('InvalidSeedsOrAuctionHouseNotDelegated', () => new InvalidSeedsOrAuctionHouseNotDelegatedError());
class BuyerTradeStateNotValidError extends Error {
    constructor() {
        super('The buyer trade state was unable to be initialized.');
        this.code = 0x1795;
        this.name = 'BuyerTradeStateNotValid';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BuyerTradeStateNotValidError);
        }
    }
}
exports.BuyerTradeStateNotValidError = BuyerTradeStateNotValidError;
createErrorFromCodeLookup.set(0x1795, () => new BuyerTradeStateNotValidError());
createErrorFromNameLookup.set('BuyerTradeStateNotValid', () => new BuyerTradeStateNotValidError());
class MissingElementForPartialOrderError extends Error {
    constructor() {
        super('Partial order size and price must both be provided in a partial buy.');
        this.code = 0x1796;
        this.name = 'MissingElementForPartialOrder';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MissingElementForPartialOrderError);
        }
    }
}
exports.MissingElementForPartialOrderError = MissingElementForPartialOrderError;
createErrorFromCodeLookup.set(0x1796, () => new MissingElementForPartialOrderError());
createErrorFromNameLookup.set('MissingElementForPartialOrder', () => new MissingElementForPartialOrderError());
class NotEnoughTokensAvailableForPurchaseError extends Error {
    constructor() {
        super('Amount of tokens available for purchase is less than the partial order amount.');
        this.code = 0x1797;
        this.name = 'NotEnoughTokensAvailableForPurchase';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotEnoughTokensAvailableForPurchaseError);
        }
    }
}
exports.NotEnoughTokensAvailableForPurchaseError = NotEnoughTokensAvailableForPurchaseError;
createErrorFromCodeLookup.set(0x1797, () => new NotEnoughTokensAvailableForPurchaseError());
createErrorFromNameLookup.set('NotEnoughTokensAvailableForPurchase', () => new NotEnoughTokensAvailableForPurchaseError());
class PartialPriceMismatchError extends Error {
    constructor() {
        super('Calculated partial price does not not partial price that was provided.');
        this.code = 0x1798;
        this.name = 'PartialPriceMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PartialPriceMismatchError);
        }
    }
}
exports.PartialPriceMismatchError = PartialPriceMismatchError;
createErrorFromCodeLookup.set(0x1798, () => new PartialPriceMismatchError());
createErrorFromNameLookup.set('PartialPriceMismatch', () => new PartialPriceMismatchError());
class AuctionHouseAlreadyDelegatedError extends Error {
    constructor() {
        super('Auction House already delegated.');
        this.code = 0x1799;
        this.name = 'AuctionHouseAlreadyDelegated';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AuctionHouseAlreadyDelegatedError);
        }
    }
}
exports.AuctionHouseAlreadyDelegatedError = AuctionHouseAlreadyDelegatedError;
createErrorFromCodeLookup.set(0x1799, () => new AuctionHouseAlreadyDelegatedError());
createErrorFromNameLookup.set('AuctionHouseAlreadyDelegated', () => new AuctionHouseAlreadyDelegatedError());
class AuctioneerAuthorityMismatchError extends Error {
    constructor() {
        super('Auctioneer Authority Mismatch');
        this.code = 0x179a;
        this.name = 'AuctioneerAuthorityMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AuctioneerAuthorityMismatchError);
        }
    }
}
exports.AuctioneerAuthorityMismatchError = AuctioneerAuthorityMismatchError;
createErrorFromCodeLookup.set(0x179a, () => new AuctioneerAuthorityMismatchError());
createErrorFromNameLookup.set('AuctioneerAuthorityMismatch', () => new AuctioneerAuthorityMismatchError());
class InsufficientFundsError extends Error {
    constructor() {
        super('Insufficient funds in escrow account to purchase.');
        this.code = 0x179b;
        this.name = 'InsufficientFunds';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InsufficientFundsError);
        }
    }
}
exports.InsufficientFundsError = InsufficientFundsError;
createErrorFromCodeLookup.set(0x179b, () => new InsufficientFundsError());
createErrorFromNameLookup.set('InsufficientFunds', () => new InsufficientFundsError());
function errorFromCode(code) {
    const createError = createErrorFromCodeLookup.get(code);
    return createError != null ? createError() : null;
}
exports.errorFromCode = errorFromCode;
function errorFromName(name) {
    const createError = createErrorFromNameLookup.get(name);
    return createError != null ? createError() : null;
}
exports.errorFromName = errorFromName;
//# sourceMappingURL=index.js.map