import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare const setCollectionDuringMintStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
export declare type SetCollectionDuringMintInstructionAccounts = {
    candyMachine: web3.PublicKey;
    metadata: web3.PublicKey;
    payer: web3.PublicKey;
    collectionPda: web3.PublicKey;
    tokenMetadataProgram: web3.PublicKey;
    instructions: web3.PublicKey;
    collectionMint: web3.PublicKey;
    collectionMetadata: web3.PublicKey;
    collectionMasterEdition: web3.PublicKey;
    authority: web3.PublicKey;
    collectionAuthorityRecord: web3.PublicKey;
};
export declare const setCollectionDuringMintInstructionDiscriminator: number[];
export declare function createSetCollectionDuringMintInstruction(accounts: SetCollectionDuringMintInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;