export declare type Config = {
    /** Fetches ENS for connected account */
    fetchEns?: boolean;
};
export declare const useAccount: ({ fetchEns }?: Config) => readonly [{
    readonly data: {
        address: string;
        connector: import("wagmi-core").Connector<any, any> | undefined;
        ens: {
            avatar: string | null | undefined;
            name: string;
        } | undefined;
    } | undefined;
    readonly error: Error | undefined;
    readonly loading: boolean;
}, () => void];
