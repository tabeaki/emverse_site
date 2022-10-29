export declare enum FEATURES {
    SAFE_TX_GAS_OPTIONAL = 0,
    SAFE_TX_GUARDS = 1
}
export declare const enabledFeatures: (version: string) => FEATURES[];
export declare const hasFeature: (name: FEATURES, version: string) => boolean;