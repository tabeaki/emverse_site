import { Chain } from '../types';
import { Connector } from './base';
declare type InjectedConnectorOptions = {
    /**
     * MetaMask and other injected providers do not support programmatic disconnect.
     * This flag simulates the disconnect behavior by keeping track of connection status in localStorage.
     * @see https://github.com/MetaMask/metamask-extension/issues/10353
     */
    shimDisconnect?: boolean;
    /**
     * MetaMask 10.9.3 emits disconnect event when chain is changed.
     * This flag disables the disconnect event and relies on the accountsChanged event for updating wallet connection.
     * This workaround is experimental and might result in stale connections.
     * @see https://github.com/MetaMask/metamask-extension/issues/13375#issuecomment-1027663334
     */
    shimChainChangedDisconnect?: boolean;
};
export declare class InjectedConnector extends Connector<Window['ethereum'], InjectedConnectorOptions | undefined> {
    #private;
    readonly id = "injected";
    readonly name: string;
    readonly ready: boolean;
    constructor(config?: {
        chains?: Chain[];
        options?: InjectedConnectorOptions;
    });
    connect(): Promise<{
        account: string;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: InjectedProviders & {
            on?: ((...args: any[]) => void) | undefined;
            removeListener?: ((...args: any[]) => void) | undefined;
            request<T = any>(args: RequestArguments): Promise<T>;
        };
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): (InjectedProviders & {
        on?: ((...args: any[]) => void) | undefined;
        removeListener?: ((...args: any[]) => void) | undefined;
        request<T = any>(args: RequestArguments): Promise<T>;
    }) | undefined;
    getSigner(): Promise<import("@ethersproject/providers").JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain | undefined>;
    watchAsset({ address, decimals, image, symbol, }: {
        address: string;
        decimals?: number;
        image?: string;
        symbol: string;
    }): Promise<void>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => void;
}
export {};
