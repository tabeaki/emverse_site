import { BigNumberish } from "ethers";
import { z } from "zod";
/**
 * @internal
 */
export declare const BYOCContractMetadataSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, string, bigint | import("ethers").BigNumber>, z.ZodUnknown]>, {
    [x: string]: unknown;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, {
    [x: string]: unknown;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare type CustomContractMetadata = z.input<typeof BYOCContractMetadataSchema>;
/**
 * @internal
 */
export declare const CustomContractInput: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, "strip", z.ZodTypeAny, {
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
/**
 * @internal
 */
export declare const CustomContractOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    image: z.ZodOptional<z.ZodString>;
}>, {
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, "strip", z.ZodTypeAny, {
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
/**
 * @internal
 */
export declare const CustomContractDeploy: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, {
    platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    primary_sale_recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>>;
}>, "strip", z.ZodTypeAny, {
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
/**
 * @internal
 */
export declare const CustomContractSchema: {
    deploy: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, {
        platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        primary_sale_recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>>;
    }>, "strip", z.ZodTypeAny, {
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
    output: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        image: z.ZodOptional<z.ZodString>;
    }>, {
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, "strip", z.ZodTypeAny, {
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
    input: z.ZodObject<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, "strip", z.ZodTypeAny, {
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
/**
 * @internal
 */
export declare const AbiTypeSchema: z.ZodObject<z.extendShape<{
    type: z.ZodString;
    name: z.ZodString;
}, {
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodAny, {
        [x: string]: any;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        type: string;
        name: string;
    }>, "many">>;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    components?: {
        [x: string]: any;
        type: string;
        name: string;
    }[] | undefined;
    stateMutability?: string | undefined;
    type: string;
    name: string;
}, {
    [x: string]: any;
    components?: {
        [x: string]: any;
        type: string;
        name: string;
    }[] | undefined;
    stateMutability?: string | undefined;
    type: string;
    name: string;
}>;
/**
 * @internal
 */
export declare const AbiObjectSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
}, "strip", z.ZodAny, {
    [x: string]: any;
    type: string;
    name: string;
    outputs: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[];
    inputs: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[];
}, {
    [x: string]: any;
    name?: string | undefined;
    outputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    inputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    type: string;
}>;
/**
 * @internal
 */
export declare const AbiSchema: z.ZodArray<z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
}, "strip", z.ZodAny, {
    [x: string]: any;
    type: string;
    name: string;
    outputs: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[];
    inputs: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[];
}, {
    [x: string]: any;
    name?: string | undefined;
    outputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    inputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    type: string;
}>, "many">;
/**
 * @internal
 */
export declare const PreDeployMetadata: z.ZodObject<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodAny, {
    [x: string]: any;
    analytics?: any;
    name: string;
    metadataUri: string;
    bytecodeUri: string;
}, {
    [x: string]: any;
    analytics?: any;
    name: string;
    metadataUri: string;
    bytecodeUri: string;
}>;
/**
 * @internal
 */
export declare const ChainIdToAddressSchema: z.ZodRecord<z.ZodString, z.ZodString>;
/**
 * @internal
 */
export declare const FactoryDeploymentSchema: z.ZodObject<{
    implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
    implementationInitializerFunction: z.ZodDefault<z.ZodString>;
    factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    factoryAddresses?: Record<string, string> | undefined;
    implementationAddresses: Record<string, string>;
    implementationInitializerFunction: string;
}, {
    implementationInitializerFunction?: string | undefined;
    factoryAddresses?: Record<string, string> | undefined;
    implementationAddresses: Record<string, string>;
}>;
/**
 * @internal
 */
export declare const ExtraPublishMetadataSchemaInput: z.ZodObject<{
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    }, {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    }>>;
}, "strip", z.ZodAny, {
    [x: string]: any;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: any;
    logo?: any;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    } | undefined;
    version: string;
}, {
    [x: string]: any;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: any;
    logo?: any;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    } | undefined;
    version: string;
}>;
/**
 * @internal
 */
export declare const ExtraPublishMetadataSchemaOutput: z.ZodObject<z.extendShape<{
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    }, {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    }>>;
}, {
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: string | null | undefined;
    logo?: string | null | undefined;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    } | undefined;
    version: string;
}, {
    [x: string]: any;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: string | null | undefined;
    logo?: string | null | undefined;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    } | undefined;
    version: string;
}>;
export declare type ExtraPublishMetadata = z.input<typeof ExtraPublishMetadataSchemaInput>;
/**
 * @internal
 */
export declare const FullPublishMetadataSchemaInput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, {
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    }, {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    }>>;
}>, {
    publisher: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    description?: string | undefined;
    analytics?: any;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: any;
    logo?: any;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    } | undefined;
    publisher?: string | undefined;
    name: string;
    version: string;
    metadataUri: string;
    bytecodeUri: string;
}, {
    [x: string]: any;
    description?: string | undefined;
    analytics?: any;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: any;
    logo?: any;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    } | undefined;
    publisher?: string | undefined;
    name: string;
    version: string;
    metadataUri: string;
    bytecodeUri: string;
}>;
/**
 * @internal
 */
export declare const FullPublishMetadataSchemaOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, z.extendShape<{
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    }, {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    }>>;
}, {
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>>, {
    publisher: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    description?: string | undefined;
    analytics?: any;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: string | null | undefined;
    logo?: string | null | undefined;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
    } | undefined;
    publisher?: string | undefined;
    name: string;
    version: string;
    metadataUri: string;
    bytecodeUri: string;
}, {
    [x: string]: any;
    description?: string | undefined;
    analytics?: any;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    audit?: string | null | undefined;
    logo?: string | null | undefined;
    isDeployableViaFactory?: boolean | undefined;
    isDeployableViaProxy?: boolean | undefined;
    factoryDeploymentData?: {
        implementationInitializerFunction?: string | undefined;
        factoryAddresses?: Record<string, string> | undefined;
        implementationAddresses: Record<string, string>;
    } | undefined;
    publisher?: string | undefined;
    name: string;
    version: string;
    metadataUri: string;
    bytecodeUri: string;
}>;
export declare type FullPublishMetadata = z.infer<typeof FullPublishMetadataSchemaOutput>;
/**
 * @internal
 */
export declare const ProfileSchemaInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    website: z.ZodOptional<z.ZodString>;
    twitter: z.ZodOptional<z.ZodString>;
    telegram: z.ZodOptional<z.ZodString>;
    facebook: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodString>;
    medium: z.ZodOptional<z.ZodString>;
    linkedin: z.ZodOptional<z.ZodString>;
    reddit: z.ZodOptional<z.ZodString>;
    discord: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: any;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: any;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}>;
export declare const ProfileSchemaOutput: z.ZodObject<z.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>>;
    website: z.ZodOptional<z.ZodString>;
    twitter: z.ZodOptional<z.ZodString>;
    telegram: z.ZodOptional<z.ZodString>;
    facebook: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodString>;
    medium: z.ZodOptional<z.ZodString>;
    linkedin: z.ZodOptional<z.ZodString>;
    reddit: z.ZodOptional<z.ZodString>;
    discord: z.ZodOptional<z.ZodString>;
}, {
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: string | null | undefined;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: string | null | undefined;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}>;
export declare type ProfileMetadataInput = z.infer<typeof ProfileSchemaInput>;
export declare type ProfileMetadata = z.infer<typeof ProfileSchemaOutput>;
/**
 * @internal
 */
export declare const PublishedContractSchema: z.ZodObject<{
    id: z.ZodString;
    timestamp: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    metadataUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    metadataUri: string;
    timestamp: string;
}, {
    id: string;
    metadataUri: string;
    timestamp: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 * Follows https://docs.soliditylang.org/en/v0.8.15/natspec-format.html
 */
export declare const ContractInfoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    details: z.ZodOptional<z.ZodString>;
    notice: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    author?: string | undefined;
    details?: string | undefined;
    notice?: string | undefined;
}, {
    title?: string | undefined;
    author?: string | undefined;
    details?: string | undefined;
    notice?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CompilerMetadataFetchedSchema: z.ZodObject<{
    name: z.ZodString;
    abi: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
    }, "strip", z.ZodAny, {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }, {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
    }>, "many">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    info: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        details: z.ZodOptional<z.ZodString>;
        notice: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }>;
    licenses: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodOptional<z.ZodString>, "many">>, string[], (string | undefined)[] | undefined>;
}, "strip", z.ZodTypeAny, {
    name: string;
    metadata: Record<string, any>;
    abi: {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
}, {
    licenses?: (string | undefined)[] | undefined;
    name: string;
    metadata: Record<string, any>;
    abi: {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
    }[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
}>;
/**
 * @internal
 */
export declare const PreDeployMetadataFetchedSchema: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, {
    name: z.ZodString;
    abi: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
    }, "strip", z.ZodAny, {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }, {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
    }>, "many">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    info: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        details: z.ZodOptional<z.ZodString>;
        notice: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }>;
    licenses: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodOptional<z.ZodString>, "many">>, string[], (string | undefined)[] | undefined>;
}>, {
    bytecode: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    analytics?: any;
    name: string;
    metadata: Record<string, any>;
    metadataUri: string;
    bytecodeUri: string;
    abi: {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
    bytecode: string;
}, {
    analytics?: any;
    licenses?: (string | undefined)[] | undefined;
    name: string;
    metadata: Record<string, any>;
    metadataUri: string;
    bytecodeUri: string;
    abi: {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
    }[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    bytecode: string;
}>;
export declare type PreDeployMetadataFetched = z.infer<typeof PreDeployMetadataFetchedSchema>;
export declare type ContractParam = z.infer<typeof AbiTypeSchema>;
export declare type PublishedContract = z.infer<typeof PublishedContractSchema>;
export declare type PublishedContractFetched = {
    name: string;
    publishedTimestamp: BigNumberish;
    publishedMetadata: FullPublishMetadata;
};
export declare type AbiFunction = {
    name: string;
    inputs: z.infer<typeof AbiTypeSchema>[];
    outputs: z.infer<typeof AbiTypeSchema>[];
    signature: string;
    stateMutability: string;
    comment: string;
};
export declare type AbiEvent = {
    name: string;
    inputs: z.infer<typeof AbiTypeSchema>[];
    outputs: z.infer<typeof AbiTypeSchema>[];
    comment: string;
};
export declare type ContractSource = {
    filename: string;
    source: string;
};
export declare type PublishedMetadata = z.infer<typeof CompilerMetadataFetchedSchema>;
//# sourceMappingURL=custom.d.ts.map