"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionPDABeet = exports.CollectionPDA = exports.collectionPDADiscriminator = void 0;
const web3 = __importStar(require("@solana/web3.js"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
const beet = __importStar(require("@metaplex-foundation/beet"));
exports.collectionPDADiscriminator = [203, 128, 119, 125, 234, 89, 232, 157];
class CollectionPDA {
    constructor(mint, candyMachine) {
        this.mint = mint;
        this.candyMachine = candyMachine;
    }
    static fromArgs(args) {
        return new CollectionPDA(args.mint, args.candyMachine);
    }
    static fromAccountInfo(accountInfo, offset = 0) {
        return CollectionPDA.deserialize(accountInfo.data, offset);
    }
    static async fromAccountAddress(connection, address) {
        const accountInfo = await connection.getAccountInfo(address);
        if (accountInfo == null) {
            throw new Error(`Unable to find CollectionPDA account at ${address}`);
        }
        return CollectionPDA.fromAccountInfo(accountInfo, 0)[0];
    }
    static gpaBuilder(programId = new web3.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ')) {
        return beetSolana.GpaBuilder.fromStruct(programId, exports.collectionPDABeet);
    }
    static deserialize(buf, offset = 0) {
        return exports.collectionPDABeet.deserialize(buf, offset);
    }
    serialize() {
        return exports.collectionPDABeet.serialize({
            accountDiscriminator: exports.collectionPDADiscriminator,
            ...this,
        });
    }
    static get byteSize() {
        return exports.collectionPDABeet.byteSize;
    }
    static async getMinimumBalanceForRentExemption(connection, commitment) {
        return connection.getMinimumBalanceForRentExemption(CollectionPDA.byteSize, commitment);
    }
    static hasCorrectByteSize(buf, offset = 0) {
        return buf.byteLength - offset === CollectionPDA.byteSize;
    }
    pretty() {
        return {
            mint: this.mint.toBase58(),
            candyMachine: this.candyMachine.toBase58(),
        };
    }
}
exports.CollectionPDA = CollectionPDA;
exports.collectionPDABeet = new beet.BeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['mint', beetSolana.publicKey],
    ['candyMachine', beetSolana.publicKey],
], CollectionPDA.fromArgs, 'CollectionPDA');
//# sourceMappingURL=CollectionPDA.js.map