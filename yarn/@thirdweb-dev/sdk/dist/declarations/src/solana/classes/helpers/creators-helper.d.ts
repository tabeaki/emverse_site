import { CreatorOutput } from "../../types/programs";
import type { Creator } from "@metaplex-foundation/js";
import { PublicKey } from "@solana/web3.js";
/**
 * @internal
 */
export declare function enforceCreator(creators: {
    verified?: boolean | undefined;
    address: string;
    sharePercentage: number;
}[] | undefined, owner: PublicKey): Creator[];
/**
 * @internal
 */
export declare function parseCreators(creators: Creator[]): CreatorOutput[];
//# sourceMappingURL=creators-helper.d.ts.map