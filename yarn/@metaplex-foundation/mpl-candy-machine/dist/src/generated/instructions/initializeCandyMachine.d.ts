import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { CandyMachineData } from '../types/CandyMachineData';
export declare type InitializeCandyMachineInstructionArgs = {
    data: CandyMachineData;
};
export declare const initializeCandyMachineStruct: beet.FixableBeetArgsStruct<InitializeCandyMachineInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export declare type InitializeCandyMachineInstructionAccounts = {
    candyMachine: web3.PublicKey;
    wallet: web3.PublicKey;
    authority: web3.PublicKey;
    payer: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    rent?: web3.PublicKey;
};
export declare const initializeCandyMachineInstructionDiscriminator: number[];
export declare function createInitializeCandyMachineInstruction(accounts: InitializeCandyMachineInstructionAccounts, args: InitializeCandyMachineInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;