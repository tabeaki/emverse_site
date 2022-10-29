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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemInstructionCoder = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const BufferLayout = __importStar(require("buffer-layout"));
const camelcase_1 = __importDefault(require("camelcase"));
class SystemInstructionCoder {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(_) { }
    encode(ixName, ix) {
        switch ((0, camelcase_1.default)(ixName)) {
            case "createAccount": {
                return encodeCreateAccount(ix);
            }
            case "assign": {
                return encodeAssign(ix);
            }
            case "transfer": {
                return encodeTransfer(ix);
            }
            case "createAccountWithSeed": {
                return encodeCreateAccountWithSeed(ix);
            }
            case "advanceNonceAccount": {
                return encodeAdvanceNonceAccount(ix);
            }
            case "withdrawNonceAccount": {
                return encodeWithdrawNonceAccount(ix);
            }
            case "initializeNonceAccount": {
                return encodeInitializeNonceAccount(ix);
            }
            case "authorizeNonceAccount": {
                return encodeAuthorizeNonceAccount(ix);
            }
            case "allocate": {
                return encodeAllocate(ix);
            }
            case "allocateWithSeed": {
                return encodeAllocateWithSeed(ix);
            }
            case "assignWithSeed": {
                return encodeAssignWithSeed(ix);
            }
            case "transferWithSeed": {
                return encodeTransferWithSeed(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("System does not have state");
    }
}
exports.SystemInstructionCoder = SystemInstructionCoder;
class RustStringLayout extends BufferLayout.Layout {
    constructor(property) {
        super(-1, property);
        this.property = property;
        this.layout = BufferLayout.struct([
            BufferLayout.u32("length"),
            BufferLayout.u32("lengthPadding"),
            BufferLayout.blob(BufferLayout.offset(BufferLayout.u32(), -8), "chars"),
        ], this.property);
    }
    encode(src, b, offset = 0) {
        if (src === null || src === undefined) {
            return this.layout.span;
        }
        const data = {
            chars: Buffer.from(src, "utf8"),
        };
        return this.layout.encode(data, b, offset);
    }
    decode(b, offset = 0) {
        const data = this.layout.decode(b, offset);
        return data["chars"].toString();
    }
    getSpan(b, offset = 0) {
        return (BufferLayout.u32().span +
            BufferLayout.u32().span +
            new bn_js_1.default(new Uint8Array(b).slice(offset, offset + 4), 10, "le").toNumber());
    }
}
function rustStringLayout(property) {
    return new RustStringLayout(property);
}
function publicKey(property) {
    return BufferLayout.blob(32, property);
}
function encodeCreateAccount({ lamports, space, owner }) {
    return encodeData({
        createAccount: { lamports, space, owner: owner.toBuffer() },
    });
}
function encodeAssign({ owner }) {
    return encodeData({
        assign: { owner: owner.toBuffer() },
    });
}
function encodeTransfer({ lamports }) {
    return encodeData({
        transfer: { lamports },
    });
}
function encodeCreateAccountWithSeed({ base, seed, lamports, space, owner, }) {
    return encodeData({
        createAccountWithSeed: {
            base: base.toBuffer(),
            seed,
            lamports,
            space,
            owner: owner.toBuffer(),
        },
    }, LAYOUT.getVariant(3).span + seed.length);
}
function encodeInitializeNonceAccount({ authorized }) {
    return encodeData({
        initializeNonceAccount: { authorized: authorized.toBuffer() },
    });
}
function encodeAdvanceNonceAccount({ authorized }) {
    return encodeData({
        advanceNonceAccount: { authorized: authorized.toBuffer() },
    });
}
function encodeWithdrawNonceAccount({ lamports }) {
    return encodeData({
        withdrawNonceAccount: { lamports },
    });
}
function encodeAuthorizeNonceAccount({ authorized }) {
    return encodeData({
        authorizeNonceAccount: { authorized: authorized.toBuffer() },
    });
}
function encodeAllocate({ space }) {
    return encodeData({
        allocate: { space },
    });
}
function encodeAllocateWithSeed({ base, seed, space, owner }) {
    return encodeData({
        allocateWithSeed: {
            base: base.toBuffer(),
            seed,
            space,
            owner: owner.toBuffer(),
        },
    }, LAYOUT.getVariant(9).span + seed.length);
}
function encodeAssignWithSeed({ base, seed, owner }) {
    return encodeData({
        assignWithSeed: {
            base: base.toBuffer(),
            seed,
            owner: owner.toBuffer(),
        },
    }, LAYOUT.getVariant(10).span + seed.length);
}
function encodeTransferWithSeed({ lamports, seed, owner }) {
    return encodeData({
        transferWithSeed: {
            lamports,
            seed,
            owner: owner.toBuffer(),
        },
    }, LAYOUT.getVariant(11).span + seed.length);
}
const LAYOUT = BufferLayout.union(BufferLayout.u32("instruction"));
LAYOUT.addVariant(0, BufferLayout.struct([
    BufferLayout.ns64("lamports"),
    BufferLayout.ns64("space"),
    publicKey("owner"),
]), "createAccount");
LAYOUT.addVariant(1, BufferLayout.struct([publicKey("owner")]), "assign");
LAYOUT.addVariant(2, BufferLayout.struct([BufferLayout.ns64("lamports")]), "transfer");
LAYOUT.addVariant(3, BufferLayout.struct([
    publicKey("base"),
    rustStringLayout("seed"),
    BufferLayout.ns64("lamports"),
    BufferLayout.ns64("space"),
    publicKey("owner"),
]), "createAccountWithSeed");
LAYOUT.addVariant(4, BufferLayout.struct([publicKey("authorized")]), "advanceNonceAccount");
LAYOUT.addVariant(5, BufferLayout.struct([BufferLayout.ns64("lamports")]), "withdrawNonceAccount");
LAYOUT.addVariant(6, BufferLayout.struct([publicKey("authorized")]), "initializeNonceAccount");
LAYOUT.addVariant(7, BufferLayout.struct([publicKey("authorized")]), "authorizeNonceAccount");
LAYOUT.addVariant(8, BufferLayout.struct([BufferLayout.ns64("space")]), "allocate");
LAYOUT.addVariant(9, BufferLayout.struct([
    publicKey("base"),
    rustStringLayout("seed"),
    BufferLayout.ns64("space"),
    publicKey("owner"),
]), "allocateWithSeed");
LAYOUT.addVariant(10, BufferLayout.struct([
    publicKey("base"),
    rustStringLayout("seed"),
    publicKey("owner"),
]), "assignWithSeed");
LAYOUT.addVariant(11, BufferLayout.struct([
    BufferLayout.ns64("lamports"),
    rustStringLayout("seed"),
    publicKey("owner"),
]), "transferWithSeed");
function encodeData(instruction, maxSpan) {
    const b = Buffer.alloc(maxSpan !== null && maxSpan !== void 0 ? maxSpan : instructionMaxSpan);
    const span = LAYOUT.encode(instruction, b);
    if (maxSpan === undefined) {
        return b.slice(0, span);
    }
    return b;
}
const instructionMaxSpan = Math.max(...Object.values(LAYOUT.registry).map((r) => r.span));
//# sourceMappingURL=instruction.js.map