import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare type MintNftInstructionArgs = {
    creatorBump: number;
};
export declare const mintNftStruct: beet.BeetArgsStruct<MintNftInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export declare type MintNftInstructionAccounts = {
    candyMachine: web3.PublicKey;
    candyMachineCreator: web3.PublicKey;
    payer: web3.PublicKey;
    wallet: web3.PublicKey;
    metadata: web3.PublicKey;
    mint: web3.PublicKey;
    mintAuthority: web3.PublicKey;
    updateAuthority: web3.PublicKey;
    masterEdition: web3.PublicKey;
    tokenMetadataProgram: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    rent?: web3.PublicKey;
    clock: web3.PublicKey;
    recentBlockhashes: web3.PublicKey;
    instructionSysvarAccount: web3.PublicKey;
};
export declare const mintNftInstructionDiscriminator: number[];
export declare function createMintNftInstruction(accounts: MintNftInstructionAccounts, args: MintNftInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;