import { BigNumber } from 'ethers';
import { Unit } from 'wagmi-core';
export declare type Config = {
    address?: string;
    formatUnits?: Unit | number;
    skip?: boolean;
};
export declare const useToken: ({ address, formatUnits, skip, }?: Config) => readonly [{
    readonly data: {
        address: string | undefined;
        decimals: number;
        symbol: string;
        totalSupply: {
            formatted: string;
            value: BigNumber;
        };
    } | undefined;
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, (token: {
    address: string;
    decimals?: number | undefined;
    image?: string | undefined;
    symbol: string;
}) => Promise<boolean | Error>, (config?: {
    address: string;
    formatUnits?: Config['formatUnits'];
} | undefined) => Promise<{
    data: {
        address: string;
        decimals: any;
        symbol: any;
        totalSupply: {
            formatted: string;
            value: any;
        };
    };
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
