/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import * as beet from '@metaplex-foundation/beet';
export declare type CollectionPDAArgs = {
    mint: web3.PublicKey;
    candyMachine: web3.PublicKey;
};
export declare const collectionPDADiscriminator: number[];
export declare class CollectionPDA implements CollectionPDAArgs {
    readonly mint: web3.PublicKey;
    readonly candyMachine: web3.PublicKey;
    private constructor();
    static fromArgs(args: CollectionPDAArgs): CollectionPDA;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [CollectionPDA, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<CollectionPDA>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        mint: any;
        accountDiscriminator: any;
        candyMachine: any;
    }>;
    static deserialize(buf: Buffer, offset?: number): [CollectionPDA, number];
    serialize(): [Buffer, number];
    static get byteSize(): number;
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    pretty(): {
        mint: string;
        candyMachine: string;
    };
}
export declare const collectionPDABeet: beet.BeetStruct<CollectionPDA, CollectionPDAArgs & {
    accountDiscriminator: number[];
}>;