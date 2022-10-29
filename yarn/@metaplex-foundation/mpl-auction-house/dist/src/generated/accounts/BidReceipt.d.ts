/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
export declare type BidReceiptArgs = {
    tradeState: web3.PublicKey;
    bookkeeper: web3.PublicKey;
    auctionHouse: web3.PublicKey;
    buyer: web3.PublicKey;
    metadata: web3.PublicKey;
    tokenAccount: beet.COption<web3.PublicKey>;
    purchaseReceipt: beet.COption<web3.PublicKey>;
    price: beet.bignum;
    tokenSize: beet.bignum;
    bump: number;
    tradeStateBump: number;
    createdAt: beet.bignum;
    canceledAt: beet.COption<beet.bignum>;
};
export declare const bidReceiptDiscriminator: number[];
export declare class BidReceipt implements BidReceiptArgs {
    readonly tradeState: web3.PublicKey;
    readonly bookkeeper: web3.PublicKey;
    readonly auctionHouse: web3.PublicKey;
    readonly buyer: web3.PublicKey;
    readonly metadata: web3.PublicKey;
    readonly tokenAccount: beet.COption<web3.PublicKey>;
    readonly purchaseReceipt: beet.COption<web3.PublicKey>;
    readonly price: beet.bignum;
    readonly tokenSize: beet.bignum;
    readonly bump: number;
    readonly tradeStateBump: number;
    readonly createdAt: beet.bignum;
    readonly canceledAt: beet.COption<beet.bignum>;
    private constructor();
    static fromArgs(args: BidReceiptArgs): BidReceipt;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [BidReceipt, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<BidReceipt>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        bump: any;
        accountDiscriminator: any;
        auctionHouse: any;
        tradeState: any;
        bookkeeper: any;
        buyer: any;
        metadata: any;
        tokenAccount: any;
        purchaseReceipt: any;
        price: any;
        tokenSize: any;
        tradeStateBump: any;
        createdAt: any;
        canceledAt: any;
    }>;
    static deserialize(buf: Buffer, offset?: number): [BidReceipt, number];
    serialize(): [Buffer, number];
    static byteSize(args: BidReceiptArgs): number;
    static getMinimumBalanceForRentExemption(args: BidReceiptArgs, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    pretty(): {
        tradeState: string;
        bookkeeper: string;
        auctionHouse: string;
        buyer: string;
        metadata: string;
        tokenAccount: beet.COption<web3.PublicKey>;
        purchaseReceipt: beet.COption<web3.PublicKey>;
        price: number | {
            toNumber: () => number;
        };
        tokenSize: number | {
            toNumber: () => number;
        };
        bump: number;
        tradeStateBump: number;
        createdAt: number | {
            toNumber: () => number;
        };
        canceledAt: beet.COption<beet.bignum>;
    };
}
export declare const bidReceiptBeet: beet.FixableBeetStruct<BidReceipt, BidReceiptArgs & {
    accountDiscriminator: number[];
}>;
