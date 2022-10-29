import * as React from 'react';
import { BaseProvider, Web3Provider, WebSocketProvider } from '@ethersproject/providers';
import { Connector, ConnectorData } from 'wagmi-core';
declare type State = {
    cacheBuster: number;
    connecting?: boolean;
    connector?: Connector;
    data?: ConnectorData<Web3Provider>;
    error?: Error;
};
declare type ContextValue = {
    state: {
        /** Flag for triggering refetch */
        cacheBuster: State['cacheBuster'];
        /** Flag for when connection is in progress */
        connecting?: State['connecting'];
        /** Active connector */
        connector?: State['connector'];
        /** Connectors used for linking accounts */
        connectors: Connector[];
        /** Active data */
        data?: State['data'];
        /** Interface for connecting to network */
        provider: BaseProvider;
        /** Interface for connecting to network */
        webSocketProvider?: WebSocketProvider;
    };
    setState: React.Dispatch<React.SetStateAction<State>>;
    setLastUsedConnector: (newValue: string | null) => void;
};
export declare const Context: React.Context<ContextValue | null>;
export declare type Props = {
    /** Enables reconnecting to last used connector on mount */
    autoConnect?: boolean;
    /**
     * Key for saving connector preference to browser
     * @default 'wagmi.wallet'
     */
    connectorStorageKey?: string;
    /**
     * Connectors used for linking accounts
     * @default [new InjectedConnector()]
     */
    connectors?: Connector[] | ((config: {
        chainId?: number;
    }) => Connector[]);
    /**
     * Interface for connecting to network
     * @default getDefaultProvider()
     */
    provider?: BaseProvider | ((config: {
        chainId?: number;
        connector?: Connector;
    }) => BaseProvider);
    /** WebSocket interface for connecting to network */
    webSocketProvider?: WebSocketProvider | ((config: {
        chainId?: number;
        connector?: Connector;
    }) => WebSocketProvider | undefined);
};
export declare const Provider: ({ autoConnect, children, connectors: connectors_, connectorStorageKey, provider: provider_, webSocketProvider: webSocketProvider_, }: React.PropsWithChildren<Props>) => React.FunctionComponentElement<React.ProviderProps<ContextValue | null>>;
export declare const useContext: () => ContextValue;
export {};