/// <reference types="bn.js" />
import { z } from "zod";
/**
 * @internal
 */
export declare const PackRewardsSchema: z.ZodObject<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
    }, {
        contractAddress: string;
        quantityPerReward: string | number;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
    }[];
}, {
    erc20Rewards?: {
        contractAddress: string;
        quantityPerReward: string | number;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }[] | undefined;
}>;
/**
 * @internal
 */
export declare const PackRewardsOutputSchema: z.ZodObject<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
}, {
    erc20Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }[] | undefined;
}>;
/**
 * @internal
 */
export declare const PackMetadataInputSchema: z.ZodObject<z.extendShape<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }>, "many">>;
}, {
    packMetadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    rewardsPerPack: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    openStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
}>, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    packMetadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    rewardsPerPack: string;
    openStartTime: import("ethers").BigNumber;
}, {
    erc20Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }[] | undefined;
    rewardsPerPack?: string | number | bigint | import("ethers").BigNumber | undefined;
    openStartTime?: Date | undefined;
    packMetadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
}>;
/**
 * @public
 */
export declare type PackMetadataInput = z.input<typeof PackMetadataInputSchema>;
/**
 * @public
 */
export declare type PackMetadataOutput = z.output<typeof PackMetadataInputSchema>;
/**
 * @public
 */
export declare type PackRewards = z.input<typeof PackRewardsSchema>;
/**
 * @public
 */
export declare type PackRewardsOutput = z.output<typeof PackRewardsOutputSchema>;
//# sourceMappingURL=pack.d.ts.map