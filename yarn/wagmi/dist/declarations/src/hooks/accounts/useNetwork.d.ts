import { Chain, SwitchChainError } from 'wagmi-core';
export declare const useNetwork: () => readonly [{
    readonly data: {
        readonly chain: {
            id: number;
            unsupported: boolean | undefined;
            name?: string | undefined;
            nativeCurrency?: {
                name: string;
                symbol: string;
                decimals: 18;
            } | undefined;
            rpcUrls?: string[] | undefined;
            blockExplorers?: {
                name: string;
                url: string;
            }[] | undefined;
            testnet?: boolean | undefined;
        } | undefined;
        readonly chains: Chain[];
    };
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, ((chainId: number) => Promise<{
    data: undefined;
    error: SwitchChainError;
} | {
    data: Chain | undefined;
    error: undefined;
}>) | undefined];