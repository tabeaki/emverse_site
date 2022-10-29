import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare const unlockFundsStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
export declare type UnlockFundsInstructionAccounts = {
    candyMachine: web3.PublicKey;
    wallet: web3.PublicKey;
    authority: web3.PublicKey;
    freezePda: web3.PublicKey;
    systemProgram?: web3.PublicKey;
};
export declare const unlockFundsInstructionDiscriminator: number[];
export declare function createUnlockFundsInstruction(accounts: UnlockFundsInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;