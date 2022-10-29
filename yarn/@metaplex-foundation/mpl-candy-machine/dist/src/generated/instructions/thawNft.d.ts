import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare const thawNftStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
export declare type ThawNftInstructionAccounts = {
    freezePda: web3.PublicKey;
    candyMachine: web3.PublicKey;
    tokenAccount: web3.PublicKey;
    owner: web3.PublicKey;
    mint: web3.PublicKey;
    edition: web3.PublicKey;
    payer: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    tokenMetadataProgram: web3.PublicKey;
    systemProgram?: web3.PublicKey;
};
export declare const thawNftInstructionDiscriminator: number[];
export declare function createThawNftInstruction(accounts: ThawNftInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;
