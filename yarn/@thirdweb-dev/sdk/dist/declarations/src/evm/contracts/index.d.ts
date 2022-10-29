import type { ContractType, NetworkOrSignerOrProvider } from "../core/types";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
export declare const EditionDropInitializer: {
    name: "DropERC1155";
    contractType: "edition-drop";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            primary_sale_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/edition-drop").EditionDrop>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const EditionInitializer: {
    name: "TokenERC1155";
    contractType: "edition";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            primary_sale_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/edition").Edition>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const MarketplaceInitializer: {
    name: "Marketplace";
    contractType: "marketplace";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            trusted_forwarders: string[];
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodUnknown, {
            [x: string]: unknown;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
        }, {
            [x: string]: unknown;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "lister", "asset"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/marketplace").Marketplace>;
    getAbi: () => Promise<({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
export declare const MultiwrapInitializer: {
    name: "Multiwrap";
    contractType: "multiwrap";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/multiwrap").Multiwrap>;
    getAbi: () => Promise<({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
export declare const NFTCollectionInitializer: {
    name: "TokenERC721";
    contractType: "nft-collection";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            primary_sale_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/nft-collection").NFTCollection>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const NFTDropInitializer: {
    name: "DropERC721";
    contractType: "nft-drop";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            primary_sale_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/nft-drop").NFTDrop>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const PackInitializer: {
    name: "Pack";
    contractType: "pack";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "minter", "asset", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/pack").Pack>;
    getAbi: () => Promise<({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
export declare const SignatureDropInitializer: {
    name: "SignatureDrop";
    contractType: "signature-drop";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            primary_sale_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/signature-drop").SignatureDrop>;
    getAbi: () => Promise<({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const SplitInitializer: {
    name: "Split";
    contractType: "split";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">>, {
                address: string;
                sharesBps: number;
            }[], {
                address: string;
                sharesBps: number;
            }[] | undefined>;
        }>, import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">>, {
                address: string;
                sharesBps: number;
            }[], {
                address: string;
                sharesBps: number;
            }[] | undefined>;
        }>>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
            trusted_forwarders: string[];
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            recipients?: {
                address: string;
                sharesBps: number;
            }[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            recipients: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, {
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }>, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">;
        }>, "strip", import("zod").ZodUnknown, {
            [x: string]: unknown;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }, {
            [x: string]: unknown;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">>, {
                address: string;
                sharesBps: number;
            }[], {
                address: string;
                sharesBps: number;
            }[] | undefined>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            recipients?: {
                address: string;
                sharesBps: number;
            }[] | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/split").Split>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
export declare const TokenDropInitializer: {
    name: "DropERC20";
    contractType: "token-drop";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            primary_sale_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            merkle?: Record<string, string> | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            merkle?: Record<string, string> | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/token-drop").TokenDrop>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const TokenInitializer: {
    name: "TokenERC20";
    contractType: "token";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            primary_sale_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
        }>;
    };
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/token").Token>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const VoteInitializer: {
    name: "VoteERC20";
    contractType: "vote";
    schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
            proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
            trusted_forwarders: string[];
            voting_delay_in_blocks: number;
            voting_period_in_blocks: number;
            voting_token_address: string;
            voting_quorum_fraction: number;
            proposal_token_threshold: string;
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            voting_delay_in_blocks?: number | undefined;
            voting_period_in_blocks?: number | undefined;
            voting_quorum_fraction?: number | undefined;
            proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
            name: string;
            voting_token_address: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, import("zod").extendShape<{
            voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
            proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
        }, {
            proposal_token_threshold: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
        }>>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
            voting_delay_in_blocks: number;
            voting_period_in_blocks: number;
            voting_token_address: string;
            voting_quorum_fraction: number;
            proposal_token_threshold: import("ethers").BigNumber;
        }, {
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            voting_delay_in_blocks?: number | undefined;
            voting_period_in_blocks?: number | undefined;
            voting_quorum_fraction?: number | undefined;
            name: string;
            voting_token_address: string;
            proposal_token_threshold: string | number | bigint | import("ethers").BigNumber;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                data?: any;
                name: string;
            }, {
                data?: any;
                name: string;
            }>]>, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
            proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
            voting_delay_in_blocks: number;
            voting_period_in_blocks: number;
            voting_token_address: string;
            voting_quorum_fraction: number;
            proposal_token_threshold: string;
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            voting_delay_in_blocks?: number | undefined;
            voting_period_in_blocks?: number | undefined;
            voting_quorum_fraction?: number | undefined;
            proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
            name: string;
            voting_token_address: string;
        }>;
    };
    roles: readonly [];
    initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/vote").Vote>;
    getAbi: () => Promise<({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
/**
 * a map from contractType -> contract metadata
 * @internal
 */
export declare const PREBUILT_CONTRACTS_MAP: {
    readonly "edition-drop": {
        name: "DropERC1155";
        contractType: "edition-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition-drop").EditionDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly edition: {
        name: "TokenERC1155";
        contractType: "edition";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition").Edition>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly marketplace: {
        name: "Marketplace";
        contractType: "marketplace";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, "strip", import("zod").ZodUnknown, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
            }, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "lister", "asset"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/marketplace").Marketplace>;
        getAbi: () => Promise<({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly multiwrap: {
        name: "Multiwrap";
        contractType: "multiwrap";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/multiwrap").Multiwrap>;
        getAbi: () => Promise<({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "nft-collection": {
        name: "TokenERC721";
        contractType: "nft-collection";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-collection").NFTCollection>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly "nft-drop": {
        name: "DropERC721";
        contractType: "nft-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-drop").NFTDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly pack: {
        name: "Pack";
        contractType: "pack";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "asset", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/pack").Pack>;
        getAbi: () => Promise<({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "signature-drop": {
        name: "SignatureDrop";
        contractType: "signature-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/signature-drop").SignatureDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            name: string;
            type: string;
            anonymous?: undefined;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            } | {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly split: {
        name: "Split";
        contractType: "split";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">>, {
                    address: string;
                    sharesBps: number;
                }[], {
                    address: string;
                    sharesBps: number;
                }[] | undefined>;
            }>, import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">>, {
                    address: string;
                    sharesBps: number;
                }[], {
                    address: string;
                    sharesBps: number;
                }[] | undefined>;
            }>>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                trusted_forwarders: string[];
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                recipients?: {
                    address: string;
                    sharesBps: number;
                }[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                recipients: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, {
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }>, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }>, "strip", import("zod").ZodUnknown, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">>, {
                    address: string;
                    sharesBps: number;
                }[], {
                    address: string;
                    sharesBps: number;
                }[] | undefined>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                recipients?: {
                    address: string;
                    sharesBps: number;
                }[] | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/split").Split>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "token-drop": {
        name: "DropERC20";
        contractType: "token-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token-drop").TokenDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly token: {
        name: "TokenERC20";
        contractType: "token";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token").Token>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly vote: {
        name: "VoteERC20";
        contractType: "vote";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                trusted_forwarders: string[];
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
                name: string;
                voting_token_address: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, import("zod").extendShape<{
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }, {
                proposal_token_threshold: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
            }>>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: import("ethers").BigNumber;
            }, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                name: string;
                voting_token_address: string;
                proposal_token_threshold: string | number | bigint | import("ethers").BigNumber;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
                name: string;
                voting_token_address: string;
            }>;
        };
        roles: readonly [];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/vote").Vote>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: never[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
};
export declare const CONTRACTS_MAP: {
    readonly custom: {
        name: "SmartContract";
        contractType: "custom";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
                fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
                merkle: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                symbol: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
                platform_fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
                primary_sale_recipient: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
                trusted_forwarders: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>>;
            }>, "strip", import("zod").ZodTypeAny, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                primary_sale_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                primary_sale_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
                fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
                merkle: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                symbol: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>>;
            }>, "strip", import("zod").ZodTypeAny, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
                fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
                merkle: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                symbol: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>>;
            }>, "strip", import("zod").ZodTypeAny, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: ("admin" | "minter" | "transfer" | "lister" | "asset" | "unwrap" | "pauser" | "factory")[];
    };
    readonly "edition-drop": {
        name: "DropERC1155";
        contractType: "edition-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition-drop").EditionDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly edition: {
        name: "TokenERC1155";
        contractType: "edition";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition").Edition>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly marketplace: {
        name: "Marketplace";
        contractType: "marketplace";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, "strip", import("zod").ZodUnknown, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
            }, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "lister", "asset"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/marketplace").Marketplace>;
        getAbi: () => Promise<({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly multiwrap: {
        name: "Multiwrap";
        contractType: "multiwrap";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/multiwrap").Multiwrap>;
        getAbi: () => Promise<({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "nft-collection": {
        name: "TokenERC721";
        contractType: "nft-collection";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-collection").NFTCollection>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly "nft-drop": {
        name: "DropERC721";
        contractType: "nft-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-drop").NFTDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly pack: {
        name: "Pack";
        contractType: "pack";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "asset", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/pack").Pack>;
        getAbi: () => Promise<({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "signature-drop": {
        name: "SignatureDrop";
        contractType: "signature-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                seller_fee_basis_points?: number | undefined;
                fee_recipient?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/signature-drop").SignatureDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            name: string;
            type: string;
            anonymous?: undefined;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            } | {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly split: {
        name: "Split";
        contractType: "split";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">>, {
                    address: string;
                    sharesBps: number;
                }[], {
                    address: string;
                    sharesBps: number;
                }[] | undefined>;
            }>, import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">>, {
                    address: string;
                    sharesBps: number;
                }[], {
                    address: string;
                    sharesBps: number;
                }[] | undefined>;
            }>>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                trusted_forwarders: string[];
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                recipients?: {
                    address: string;
                    sharesBps: number;
                }[] | undefined;
                name: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                recipients: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, {
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }>, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }>, "strip", import("zod").ZodUnknown, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }, {
                [x: string]: unknown;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">>, {
                    address: string;
                    sharesBps: number;
                }[], {
                    address: string;
                    sharesBps: number;
                }[] | undefined>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                recipients: {
                    address: string;
                    sharesBps: number;
                }[];
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                recipients?: {
                    address: string;
                    sharesBps: number;
                }[] | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/split").Split>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "token-drop": {
        name: "DropERC20";
        contractType: "token-drop";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                merkle: Record<string, string>;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                merkle?: Record<string, string> | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                merkle: Record<string, string>;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                merkle?: Record<string, string> | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token-drop").TokenDrop>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly token: {
        name: "TokenERC20";
        contractType: "token";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, {
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            }>, {
                primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                primary_sale_recipient: string;
                trusted_forwarders: string[];
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                name: string;
                primary_sale_recipient: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                symbol: string;
                name: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                symbol: string;
                name: string;
            }, {
                symbol?: string | undefined;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
            }>;
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token").Token>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly vote: {
        name: "VoteERC20";
        contractType: "vote";
        schema: {
            deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }>, {
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                trusted_forwarders: string[];
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                trusted_forwarders?: string[] | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
                name: string;
                voting_token_address: string;
            }>;
            output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }>, import("zod").extendShape<{
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }, {
                proposal_token_threshold: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
            }>>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: import("ethers").BigNumber;
            }, {
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                name: string;
                voting_token_address: string;
                proposal_token_threshold: string | number | bigint | import("ethers").BigNumber;
            }>;
            input: import("zod").ZodObject<import("zod").extendShape<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                    data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                    name: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    data?: any;
                    name: string;
                }, {
                    data?: any;
                    name: string;
                }>]>, import("zod").ZodString]>>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
            }, {
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }>, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
            }, {
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
                name: string;
                voting_token_address: string;
            }>;
        };
        roles: readonly [];
        initialize: (network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            readonlySettings?: {
                chainId?: number | undefined;
                rpcUrl: string;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                experimentalChainlessSupport?: boolean | undefined;
                openzeppelin: {
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    relayerUrl: string;
                };
            } | {
                biconomy: {
                    deadlineSeconds?: number | undefined;
                    apiId: string;
                    apiKey: string;
                };
            } | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/vote").Vote>;
        getAbi: () => Promise<({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: never[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
};
/**
 * @internal
 */
export declare function getContractTypeForRemoteName(name: string): ContractType;
//# sourceMappingURL=index.d.ts.map