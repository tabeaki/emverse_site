import { Connector, ConnectorData } from 'wagmi-core';
export declare const useConnect: () => readonly [{
    readonly data: {
        readonly connected: boolean;
        readonly connector: Connector<any, any> | undefined;
        readonly connectors: Connector<any, any>[];
    };
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, (connector: Connector) => Promise<{
    data?: ConnectorData;
    error?: Error;
}>];
