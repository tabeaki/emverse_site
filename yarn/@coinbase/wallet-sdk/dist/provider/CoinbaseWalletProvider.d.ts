import SafeEventEmitter from "@metamask/safe-event-emitter";
import { DiagnosticLogger } from "../connection/DiagnosticLogger";
import { ScopedLocalStorage } from "../lib/ScopedLocalStorage";
import { WalletSDKRelayAbstract } from "../relay/WalletSDKRelayAbstract";
import { WalletSDKRelayEventManager } from "../relay/WalletSDKRelayEventManager";
import { AddressString, Callback, ProviderType } from "../types";
import { JSONRPCRequest, JSONRPCResponse } from "./JSONRPC";
import { RequestArguments, Web3Provider } from "./Web3Provider";
export interface CoinbaseWalletProviderOptions {
    chainId: number;
    jsonRpcUrl: string;
    qrUrl?: string | null;
    overrideIsCoinbaseWallet?: boolean;
    overrideIsCoinbaseBrowser?: boolean;
    overrideIsMetaMask: boolean;
    relayEventManager: WalletSDKRelayEventManager;
    relayProvider: () => Promise<WalletSDKRelayAbstract>;
    storage: ScopedLocalStorage;
    diagnosticLogger?: DiagnosticLogger;
    supportsAddressSwitching?: boolean;
    isLedger?: boolean;
}
export declare class CoinbaseWalletProvider extends SafeEventEmitter implements Web3Provider {
    readonly isCoinbaseWallet: boolean;
    readonly isCoinbaseBrowser: boolean;
    readonly qrUrl?: string | null;
    reloadOnDisconnect: boolean;
    private readonly _filterPolyfill;
    private readonly _subscriptionManager;
    private readonly _relayProvider;
    private _relay;
    private readonly _storage;
    private readonly _relayEventManager;
    private readonly diagnostic?;
    private _chainIdFromOpts;
    private _jsonRpcUrlFromOpts;
    private readonly _overrideIsMetaMask;
    private _addresses;
    private hasMadeFirstChainChangedEmission;
    private supportsAddressSwitching?;
    private isLedger?;
    constructor(options: Readonly<CoinbaseWalletProviderOptions>);
    get selectedAddress(): AddressString | undefined;
    get networkVersion(): string;
    get chainId(): string;
    get isWalletLink(): boolean;
    /**
     * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
     * true for this method.
     */
    get isMetaMask(): boolean;
    get host(): string;
    get connected(): boolean;
    isConnected(): boolean;
    private get jsonRpcUrl();
    private set jsonRpcUrl(value);
    disableReloadOnDisconnect(): void;
    /**
     * this function is called when coinbase provider is being injected to a dapp
     * standalone + walletlinked extension, ledger, in-app browser using cipher-web-view
     */
    setProviderInfo(jsonRpcUrl: string, chainId: number): void;
    private updateProviderInfo;
    private watchAsset;
    private addEthereumChain;
    private switchEthereumChain;
    setAppInfo(appName: string, appLogoUrl: string | null): void;
    enable(): Promise<AddressString[]>;
    close(): Promise<void>;
    send(request: JSONRPCRequest): JSONRPCResponse;
    send(request: JSONRPCRequest[]): JSONRPCResponse[];
    send(request: JSONRPCRequest, callback: Callback<JSONRPCResponse>): void;
    send(request: JSONRPCRequest[], callback: Callback<JSONRPCResponse[]>): void;
    send<T = any>(method: string, params?: any[] | any): Promise<T>;
    sendAsync(request: JSONRPCRequest, callback: Callback<JSONRPCResponse>): void;
    sendAsync(request: JSONRPCRequest[], callback: Callback<JSONRPCResponse[]>): void;
    request<T>(args: RequestArguments): Promise<T>;
    scanQRCode(match?: RegExp): Promise<string>;
    genericRequest(data: object, action: string): Promise<string>;
    selectProvider(providerOptions: ProviderType[]): Promise<ProviderType>;
    supportsSubscriptions(): boolean;
    subscribe(): void;
    unsubscribe(): void;
    disconnect(): boolean;
    private _send;
    private _sendAsync;
    private _sendRequest;
    private _setAddresses;
    private _sendRequestAsync;
    private _sendMultipleRequestsAsync;
    private _handleSynchronousMethods;
    private _handleAsynchronousMethods;
    private _handleAsynchronousFilterMethods;
    private _handleSubscriptionMethods;
    private _isKnownAddress;
    private _ensureKnownAddress;
    private _prepareTransactionParams;
    private _isAuthorized;
    private _requireAuthorization;
    private _throwUnsupportedMethodError;
    private _signEthereumMessage;
    private _ethereumAddressFromSignedMessage;
    private _eth_accounts;
    private _eth_coinbase;
    private _net_version;
    private _eth_chainId;
    private getChainId;
    private _eth_requestAccounts;
    private _eth_sign;
    private _eth_ecRecover;
    private _personal_sign;
    private _personal_ecRecover;
    private _eth_signTransaction;
    private _eth_sendRawTransaction;
    private _eth_sendTransaction;
    private _eth_signTypedData_v1;
    private _eth_signTypedData_v3;
    private _eth_signTypedData_v4;
    /** @deprecated */
    private _cbwallet_arbitrary;
    private _wallet_addEthereumChain;
    private _wallet_switchEthereumChain;
    private _wallet_watchAsset;
    private _eth_uninstallFilter;
    private _eth_newFilter;
    private _eth_newBlockFilter;
    private _eth_newPendingTransactionFilter;
    private _eth_getFilterChanges;
    private _eth_getFilterLogs;
    private initializeRelay;
}
