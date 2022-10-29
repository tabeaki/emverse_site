/// <reference types="node" />
import { Observable } from "rxjs";
import { WalletLinkAnalyticsAbstract } from "../init";
import { ScopedLocalStorage } from "../lib/ScopedLocalStorage";
import { WalletLinkUI, WalletLinkUIOptions } from "../provider/WalletLinkUI";
import { AddressString, IntNumber, RegExpString } from "../types";
import { EthereumTransactionParams } from "./EthereumTransactionParams";
import { RelayMessage } from "./RelayMessage";
import { Session } from "./Session";
import { CancelablePromise, WalletLinkRelayAbstract } from "./WalletLinkRelayAbstract";
import { WalletLinkRelayEventManager } from "./WalletLinkRelayEventManager";
import { GenericRequest, Web3Request } from "./Web3Request";
import { AddEthereumChainResponse, EthereumAddressFromSignedMessageResponse, GenericResponse, RequestEthereumAccountsResponse, ScanQRCodeResponse, SignEthereumMessageResponse, SignEthereumTransactionResponse, SubmitEthereumTransactionResponse, SwitchEthereumChainResponse, WatchAssetResponse, Web3Response } from "./Web3Response";
export interface WalletLinkRelayOptions {
    walletLinkUrl: string;
    version: string;
    darkMode: boolean;
    storage: ScopedLocalStorage;
    relayEventManager: WalletLinkRelayEventManager;
    walletLinkUIConstructor: (options: Readonly<WalletLinkUIOptions>) => WalletLinkUI;
    walletLinkAnalytics?: WalletLinkAnalyticsAbstract;
}
export declare class WalletLinkRelay extends WalletLinkRelayAbstract {
    private static accountRequestCallbackIds;
    private readonly walletLinkUrl;
    protected readonly storage: ScopedLocalStorage;
    private readonly _session;
    private readonly relayEventManager;
    protected readonly walletLinkAnalytics: WalletLinkAnalyticsAbstract | null;
    private readonly connection;
    private accountsCallback;
    private chainCallback;
    private ui;
    private appName;
    private appLogoUrl;
    private subscriptions;
    isLinked: boolean | undefined;
    isUnlinkedErrorState: boolean | undefined;
    constructor(options: Readonly<WalletLinkRelayOptions>);
    attachUI(): void;
    resetAndReload(): void;
    setAppInfo(appName: string, appLogoUrl: string | null): void;
    getStorageItem(key: string): string | null;
    get session(): Session;
    setStorageItem(key: string, value: string): void;
    signEthereumMessage(message: Buffer, address: AddressString, addPrefix: boolean, typedDataJson?: string | null): CancelablePromise<SignEthereumMessageResponse>;
    ethereumAddressFromSignedMessage(message: Buffer, signature: Buffer, addPrefix: boolean): CancelablePromise<EthereumAddressFromSignedMessageResponse>;
    signEthereumTransaction(params: EthereumTransactionParams): CancelablePromise<SignEthereumTransactionResponse>;
    signAndSubmitEthereumTransaction(params: EthereumTransactionParams): CancelablePromise<SubmitEthereumTransactionResponse>;
    submitEthereumTransaction(signedTransaction: Buffer, chainId: IntNumber): CancelablePromise<SubmitEthereumTransactionResponse>;
    scanQRCode(regExp: RegExpString): CancelablePromise<ScanQRCodeResponse>;
    genericRequest(data: object, action: string): CancelablePromise<GenericResponse>;
    sendGenericMessage(request: GenericRequest): CancelablePromise<GenericResponse>;
    sendRequest<T extends Web3Request, U extends Web3Response>(request: T): CancelablePromise<U>;
    setConnectDisabled(disabled: boolean): void;
    setAccountsCallback(accountsCallback: (accounts: [string]) => void): void;
    setChainCallback(chainCallback: (chainId: string, jsonRpcUrl: string) => void): void;
    private publishWeb3RequestEvent;
    private publishWeb3RequestCanceledEvent;
    protected publishEvent(event: string, message: RelayMessage, callWebhook: boolean): Observable<string>;
    private handleIncomingEvent;
    private handleWeb3ResponseMessage;
    private invokeCallback;
    requestEthereumAccounts(): CancelablePromise<RequestEthereumAccountsResponse>;
    watchAsset(type: string, address: string, symbol?: string, decimals?: number, image?: string): CancelablePromise<WatchAssetResponse>;
    addEthereumChain(chainId: string, rpcUrls: string[], iconUrls: string[], blockExplorerUrls: string[], chainName?: string, nativeCurrency?: {
        name: string;
        symbol: string;
        decimals: number;
    }): {
        promise: Promise<AddEthereumChainResponse>;
        cancel: () => void;
    };
    switchEthereumChain(chainId: string): CancelablePromise<SwitchEthereumChainResponse>;
    private getSessionIdHash;
    private sendRequestStandalone;
}
