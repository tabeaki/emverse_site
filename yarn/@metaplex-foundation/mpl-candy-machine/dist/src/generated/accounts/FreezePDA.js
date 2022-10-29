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
exports.freezePDABeet = exports.FreezePDA = exports.freezePDADiscriminator = void 0;
const web3 = __importStar(require("@solana/web3.js"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
exports.freezePDADiscriminator = [154, 58, 148, 24, 101, 200, 243, 127];
class FreezePDA {
    constructor(candyMachine, allowThaw, frozenCount, mintStart, freezeTime, freezeFee) {
        this.candyMachine = candyMachine;
        this.allowThaw = allowThaw;
        this.frozenCount = frozenCount;
        this.mintStart = mintStart;
        this.freezeTime = freezeTime;
        this.freezeFee = freezeFee;
    }
    static fromArgs(args) {
        return new FreezePDA(args.candyMachine, args.allowThaw, args.frozenCount, args.mintStart, args.freezeTime, args.freezeFee);
    }
    static fromAccountInfo(accountInfo, offset = 0) {
        return FreezePDA.deserialize(accountInfo.data, offset);
    }
    static async fromAccountAddress(connection, address) {
        const accountInfo = await connection.getAccountInfo(address);
        if (accountInfo == null) {
            throw new Error(`Unable to find FreezePDA account at ${address}`);
        }
        return FreezePDA.fromAccountInfo(accountInfo, 0)[0];
    }
    static gpaBuilder(programId = new web3.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ')) {
        return beetSolana.GpaBuilder.fromStruct(programId, exports.freezePDABeet);
    }
    static deserialize(buf, offset = 0) {
        return exports.freezePDABeet.deserialize(buf, offset);
    }
    serialize() {
        return exports.freezePDABeet.serialize({
            accountDiscriminator: exports.freezePDADiscriminator,
            ...this,
        });
    }
    static byteSize(args) {
        const instance = FreezePDA.fromArgs(args);
        return exports.freezePDABeet.toFixedFromValue({
            accountDiscriminator: exports.freezePDADiscriminator,
            ...instance,
        }).byteSize;
    }
    static async getMinimumBalanceForRentExemption(args, connection, commitment) {
        return connection.getMinimumBalanceForRentExemption(FreezePDA.byteSize(args), commitment);
    }
    pretty() {
        return {
            candyMachine: this.candyMachine.toBase58(),
            allowThaw: this.allowThaw,
            frozenCount: (() => {
                const x = this.frozenCount;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            mintStart: this.mintStart,
            freezeTime: (() => {
                const x = this.freezeTime;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            freezeFee: (() => {
                const x = this.freezeFee;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
        };
    }
}
exports.FreezePDA = FreezePDA;
exports.freezePDABeet = new beet.FixableBeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['candyMachine', beetSolana.publicKey],
    ['allowThaw', beet.bool],
    ['frozenCount', beet.u64],
    ['mintStart', beet.coption(beet.i64)],
    ['freezeTime', beet.i64],
    ['freezeFee', beet.u64],
], FreezePDA.fromArgs, 'FreezePDA');
//# sourceMappingURL=FreezePDA.js.map