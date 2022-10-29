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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountProviders = void 0;
__exportStar(require("./CandyMachine"), exports);
__exportStar(require("./CollectionPDA"), exports);
__exportStar(require("./FreezePDA"), exports);
const CandyMachine_1 = require("./CandyMachine");
const CollectionPDA_1 = require("./CollectionPDA");
const FreezePDA_1 = require("./FreezePDA");
exports.accountProviders = { CandyMachine: CandyMachine_1.CandyMachine, CollectionPDA: CollectionPDA_1.CollectionPDA, FreezePDA: FreezePDA_1.FreezePDA };
//# sourceMappingURL=index.js.map