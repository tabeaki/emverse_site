import { z } from "zod";
/**
 * @internal
 */
export declare const NFTDropInitialConditionsInputSchema: z.ZodObject<{
    totalSupply: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    totalSupply: string;
}, {
    totalSupply: string | number;
}>;
/**
 * @internal
 */
export declare const NFTDropUpdateableConditionsInputSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    primarySaleRecipient: z.ZodOptional<z.ZodString>;
    sellerFeeBasisPoints: z.ZodOptional<z.ZodNumber>;
    startTime: z.ZodOptional<z.ZodDate>;
    maxClaimable: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
}, "strip", z.ZodTypeAny, {
    primarySaleRecipient?: string | undefined;
    startTime?: Date | undefined;
    price?: string | undefined;
    currencyAddress?: string | null | undefined;
    maxClaimable?: string | undefined;
    sellerFeeBasisPoints?: number | undefined;
}, {
    primarySaleRecipient?: string | undefined;
    startTime?: Date | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | null | undefined;
    maxClaimable?: string | number | undefined;
    sellerFeeBasisPoints?: number | undefined;
}>;
/**
 * @internal
 */
export declare const NFTDropUpdateableConditionsOutputSchema: z.ZodObject<{
    price: z.ZodObject<{
        value: z.ZodString;
        displayValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        displayValue: string;
    }, {
        value: string;
        displayValue: string;
    }>;
    currencyAddress: z.ZodNullable<z.ZodString>;
    primarySaleRecipient: z.ZodString;
    sellerFeeBasisPoints: z.ZodNumber;
    startTime: z.ZodNullable<z.ZodDate>;
    totalAvailableSupply: z.ZodNumber;
    lazyMintedSupply: z.ZodNumber;
    claimedSupply: z.ZodNumber;
    maxClaimable: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    isReadyToClaim: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    primarySaleRecipient: string;
    startTime: Date | null;
    price: {
        value: string;
        displayValue: string;
    };
    currencyAddress: string | null;
    maxClaimable: string;
    sellerFeeBasisPoints: number;
    totalAvailableSupply: number;
    lazyMintedSupply: number;
    claimedSupply: number;
    isReadyToClaim: boolean;
}, {
    maxClaimable?: string | number | undefined;
    primarySaleRecipient: string;
    startTime: Date | null;
    price: {
        value: string;
        displayValue: string;
    };
    currencyAddress: string | null;
    sellerFeeBasisPoints: number;
    totalAvailableSupply: number;
    lazyMintedSupply: number;
    claimedSupply: number;
    isReadyToClaim: boolean;
}>;
/**
 * @internal
 */
export declare const NFTDropContractInputSchema: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    symbol: z.ZodOptional<z.ZodString>;
    /**
     * @internal
     */
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
    creators: z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        sharePercentage: z.ZodNumber;
        verified: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharePercentage: number;
        verified: boolean;
    }, {
        verified?: boolean | undefined;
        address: string;
        sharePercentage: number;
    }>, "many">>;
}>, {
    totalSupply: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}>, "strip", z.ZodTypeAny, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    totalSupply: string;
    creators: {
        address: string;
        sharePercentage: number;
        verified: boolean;
    }[];
}, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    creators?: {
        verified?: boolean | undefined;
        address: string;
        sharePercentage: number;
    }[] | undefined;
    name: string;
    totalSupply: string | number;
}>;
/**
 * @public
 */
export declare type NFTDropContractInput = z.input<typeof NFTDropContractInputSchema>;
/**
 * @public
 */
export declare type NFTDropConditionsInput = z.input<typeof NFTDropUpdateableConditionsInputSchema>;
/**
 * @public
 */
export declare type NFTDropConditions = z.output<typeof NFTDropUpdateableConditionsOutputSchema>;
//# sourceMappingURL=nft-drop.d.ts.map