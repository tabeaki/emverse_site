import { CallOverrides, ethers } from 'ethers';
import { Config as UseContractConfig } from './useContract';
declare type Config = {
    /** Arguments to pass contract method */
    args?: any | any[];
    overrides?: CallOverrides;
};
export declare const useContractWrite: <Contract extends ethers.Contract = ethers.Contract>(contractConfig: UseContractConfig, functionName: string, { args, overrides }?: Config) => readonly [{
    readonly data: ethers.providers.TransactionResponse | undefined;
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, (config?: {
    args?: Config['args'];
    overrides?: Config['overrides'];
} | undefined) => Promise<{
    data: ethers.providers.TransactionResponse;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
export {};