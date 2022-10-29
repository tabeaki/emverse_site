/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { CandyMachineData } from '../types/CandyMachineData';
export declare type CandyMachineArgs = {
    authority: web3.PublicKey;
    wallet: web3.PublicKey;
    tokenMint: beet.COption<web3.PublicKey>;
    itemsRedeemed: beet.bignum;
    data: CandyMachineData;
};
export declare const candyMachineDiscriminator: number[];
export declare class CandyMachine implements CandyMachineArgs {
    readonly authority: web3.PublicKey;
    readonly wallet: web3.PublicKey;
    readonly tokenMint: beet.COption<web3.PublicKey>;
    readonly itemsRedeemed: beet.bignum;
    readonly data: CandyMachineData;
    private constructor();
    static fromArgs(args: CandyMachineArgs): CandyMachine;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [CandyMachine, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<CandyMachine>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        data: any;
        authority: any;
        wallet: any;
        tokenMint: any;
        itemsRedeemed: any;
        accountDiscriminator: any;
    }>;
    static deserialize(buf: Buffer, offset?: number): [CandyMachine, number];
    serialize(): [Buffer, number];
    static byteSize(args: CandyMachineArgs): number;
    static getMinimumBalanceForRentExemption(args: CandyMachineArgs, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    pretty(): {
        authority: string;
        wallet: string;
        tokenMint: beet.COption<web3.PublicKey>;
        itemsRedeemed: number | {
            toNumber: () => number;
        };
        data: CandyMachineData;
    };
}
export declare const candyMachineBeet: beet.FixableBeetStruct<CandyMachine, CandyMachineArgs & {
    accountDiscriminator: number[];
}>;