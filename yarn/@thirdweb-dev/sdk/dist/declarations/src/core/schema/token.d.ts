import { z } from "zod";
/**
 * @internal
 */
export declare const CommonTokenInputSchema: z.ZodObject<{
    name: z.ZodString;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
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
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    symbol: string;
    name: string;
    decimals: number;
}, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    symbol: string;
    name: string;
    decimals: number;
}>;
/**
 * @internal
 */
export declare const CurrencyValueSchema: z.ZodObject<{
    value: z.ZodString;
    displayValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    displayValue: string;
}, {
    value: string;
    displayValue: string;
}>;
/**
 * Currency value and display value
 * @public
 */
export declare type CurrencyValue = z.input<typeof CurrencyValueSchema>;
/**
 * @internal
 */
export declare const CommonTokenOutputSchema: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
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
    supply: z.ZodObject<{
        value: z.ZodString;
        displayValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        displayValue: string;
    }, {
        value: string;
        displayValue: string;
    }>;
}>, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    symbol: string;
    name: string;
    decimals: number;
    supply: {
        value: string;
        displayValue: string;
    };
}, {
    [x: string]: unknown;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    symbol: string;
    name: string;
    decimals: number;
    supply: {
        value: string;
        displayValue: string;
    };
}>;
/**
 * Metadata for a token
 * @public
 */
export declare type TokenMetadata = z.output<typeof CommonTokenOutputSchema>;
//# sourceMappingURL=token.d.ts.map