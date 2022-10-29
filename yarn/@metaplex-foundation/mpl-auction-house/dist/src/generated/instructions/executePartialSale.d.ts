import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare type ExecutePartialSaleInstructionArgs = {
    escrowPaymentBump: number;
    freeTradeStateBump: number;
    programAsSignerBump: number;
    buyerPrice: beet.bignum;
    tokenSize: beet.bignum;
    partialOrderSize: beet.COption<beet.bignum>;
    partialOrderPrice: beet.COption<beet.bignum>;
};
export declare const executePartialSaleStruct: beet.FixableBeetArgsStruct<ExecutePartialSaleInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export declare type ExecutePartialSaleInstructionAccounts = {
    buyer: web3.PublicKey;
    seller: web3.PublicKey;
    tokenAccount: web3.PublicKey;
    tokenMint: web3.PublicKey;
    metadata: web3.PublicKey;
    treasuryMint: web3.PublicKey;
    escrowPaymentAccount: web3.PublicKey;
    sellerPaymentReceiptAccount: web3.PublicKey;
    buyerReceiptTokenAccount: web3.PublicKey;
    authority: web3.PublicKey;
    auctionHouse: web3.PublicKey;
    auctionHouseFeeAccount: web3.PublicKey;
    auctionHouseTreasury: web3.PublicKey;
    buyerTradeState: web3.PublicKey;
    sellerTradeState: web3.PublicKey;
    freeTradeState: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    ataProgram?: web3.PublicKey;
    programAsSigner: web3.PublicKey;
    rent?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const executePartialSaleInstructionDiscriminator: number[];
export declare function createExecutePartialSaleInstruction(accounts: ExecutePartialSaleInstructionAccounts, args: ExecutePartialSaleInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;