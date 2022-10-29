import { Layout } from '@solana/buffer-layout';
export declare const bigInt: (length: number) => (property?: string | undefined) => Layout<bigint>;
export declare const bigIntBE: (length: number) => (property?: string | undefined) => Layout<bigint>;
export declare const u64: (property?: string | undefined) => Layout<bigint>;
export declare const u64be: (property?: string | undefined) => Layout<bigint>;
export declare const u128: (property?: string | undefined) => Layout<bigint>;
export declare const u128be: (property?: string | undefined) => Layout<bigint>;
export declare const u192: (property?: string | undefined) => Layout<bigint>;
export declare const u192be: (property?: string | undefined) => Layout<bigint>;
export declare const u256: (property?: string | undefined) => Layout<bigint>;
export declare const u256be: (property?: string | undefined) => Layout<bigint>;