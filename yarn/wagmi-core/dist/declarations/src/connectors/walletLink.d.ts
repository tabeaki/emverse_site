import { Web3Provider } from '@ethersproject/providers';
import { WalletLinkProvider } from 'walletlink';
import { WalletLinkOptions } from 'walletlink/dist/WalletLink';
import { Chain } from '../types';
import { Connector } from './base';
declare type Options = WalletLinkOptions & {
    jsonRpcUrl?: string;
};
/**
 * @deprecated se the new {@link CoinbaseWalletConnector} base class instead.
 */
export declare class WalletLinkConnector extends Connector<WalletLinkProvider, Options> {
    #private;
    readonly id = "walletLink";
    readonly name = "Coinbase Wallet";
    readonly ready: boolean;
    constructor(config: {
        chains?: Chain[];
        options: Options;
    });
    connect(): Promise<{
        account: string;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: Web3Provider;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): WalletLinkProvider;
    getSigner(): Promise<import("@ethersproject/providers").JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain | undefined>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => void;
}
export {};
