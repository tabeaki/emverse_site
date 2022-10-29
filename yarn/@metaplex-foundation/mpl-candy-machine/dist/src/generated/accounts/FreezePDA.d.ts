/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
export declare type FreezePDAArgs = {
    candyMachine: web3.PublicKey;
    allowThaw: boolean;
    frozenCount: beet.bignum;
    mintStart: beet.COption<beet.bignum>;
    freezeTime: beet.bignum;
    freezeFee: beet.bignum;
};
export declare const freezePDADiscriminator: number[];
export declare class FreezePDA implements FreezePDAArgs {
    readonly candyMachine: web3.PublicKey;
    readonly allowThaw: boolean;
    readonly frozenCount: beet.bignum;
    readonly mintStart: beet.COption<beet.bignum>;
    readonly freezeTime: beet.bignum;
    readonly freezeFee: beet.bignum;
    private constructor();
    static fromArgs(args: FreezePDAArgs): FreezePDA;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [FreezePDA, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<FreezePDA>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        freezeTime: any;
        accountDiscriminator: any;
        candyMachine: any;
        allowThaw: any;
        frozenCount: any;
        mintStart: any;
        freezeFee: any;
    }>;
    static deserialize(buf: Buffer, offset?: number): [FreezePDA, number];
    serialize(): [Buffer, number];
    static byteSize(args: FreezePDAArgs): number;
    static getMinimumBalanceForRentExemption(args: FreezePDAArgs, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    pretty(): {
        candyMachine: string;
        allowThaw: boolean;
        frozenCount: number | {
            toNumber: () => number;
        };
        mintStart: beet.COption<beet.bignum>;
        freezeTime: number | {
            toNumber: () => number;
        };
        freezeFee: number | {
            toNumber: () => number;
        };
    };
}
export declare const freezePDABeet: beet.FixableBeetStruct<FreezePDA, FreezePDAArgs & {
    accountDiscriminator: number[];
}>;