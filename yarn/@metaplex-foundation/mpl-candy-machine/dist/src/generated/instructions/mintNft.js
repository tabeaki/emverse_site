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
exports.createMintNftInstruction = exports.mintNftInstructionDiscriminator = exports.mintNftStruct = void 0;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
exports.mintNftStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['creatorBump', beet.u8],
], 'MintNftInstructionArgs');
exports.mintNftInstructionDiscriminator = [211, 57, 6, 167, 15, 219, 35, 251];
function createMintNftInstruction(accounts, args, programId = new web3.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ')) {
    var _a, _b, _c;
    const [data] = exports.mintNftStruct.serialize({
        instructionDiscriminator: exports.mintNftInstructionDiscriminator,
        ...args,
    });
    const keys = [
        {
            pubkey: accounts.candyMachine,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.candyMachineCreator,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.payer,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: accounts.wallet,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.metadata,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.mint,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.mintAuthority,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: accounts.updateAuthority,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: accounts.masterEdition,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.tokenMetadataProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.tokenProgram) !== null && _a !== void 0 ? _a : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_b = accounts.systemProgram) !== null && _b !== void 0 ? _b : web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_c = accounts.rent) !== null && _c !== void 0 ? _c : web3.SYSVAR_RENT_PUBKEY,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.clock,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.recentBlockhashes,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.instructionSysvarAccount,
            isWritable: false,
            isSigner: false,
        },
    ];
    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    });
    return ix;
}
exports.createMintNftInstruction = createMintNftInstruction;
//# sourceMappingURL=mintNft.js.map