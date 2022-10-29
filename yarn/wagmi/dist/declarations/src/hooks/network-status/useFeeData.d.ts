import { FeeData } from '@ethersproject/providers';
import { Unit } from 'wagmi-core';
declare type Config = {
    /** Units for formatting output */
    formatUnits?: Unit | number;
    /** Disables fetching */
    skip?: boolean;
    /** Subscribe to changes */
    watch?: boolean;
};
export declare const useFeeData: ({ formatUnits, skip, watch, }?: Config) => readonly [{
    readonly data: {
        formatted: {
            gasPrice: string;
            maxFeePerGas: string;
            maxPriorityFeePerGas: string;
        } | undefined;
        maxFeePerGas: import("ethers").BigNumber | null;
        maxPriorityFeePerGas: import("ethers").BigNumber | null;
        gasPrice: import("ethers").BigNumber | null;
    } | undefined;
    readonly loading: boolean | undefined;
    readonly error: Error | undefined;
}, () => Promise<{
    data: FeeData;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
export {};
