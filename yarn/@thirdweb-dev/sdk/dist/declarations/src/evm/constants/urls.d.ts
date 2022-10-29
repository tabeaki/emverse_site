import { SignerOrProvider } from "../core/types";
import { ChainId, SUPPORTED_CHAIN_ID } from "./chains";
import { ethers } from "ethers";
/**
 * @internal
 */
export declare const DEFAULT_IPFS_GATEWAY = "https://gateway.ipfscdn.io/ipfs/";
declare type ChainNames = "mainnet" | "ethereum" | "goerli" | "polygon" | "matic" | "mumbai" | "fantom" | "fantom-testnet" | "avalanche" | "avalanche-testnet" | "avalanche-fuji" | "optimism" | "optimism-goerli" | "arbitrum" | "arbitrum-goerli" | "binance" | "binance-testnet";
/**
 * @internal
 */
export declare type ChainOrRpc = ChainNames | (string & {});
export declare const CHAIN_NAME_TO_ID: Record<ChainNames, SUPPORTED_CHAIN_ID>;
export declare const CHAIN_ID_TO_NAME: Record<ChainId, ChainNames>;
export declare const DEFAULT_RPC_URLS: Record<SUPPORTED_CHAIN_ID, string>;
/**
 * @internal
 * @param network - the chain name or rpc url
 * @returns the rpc url for that chain
 */
export declare function getProviderForNetwork(network: ChainOrRpc | SignerOrProvider): string | ethers.Signer | ethers.providers.Provider;
/**
 *
 * @param network - the chain name or rpc url
 * @param chainId - the optional chain id
 * @returns the provider
 */
export declare function getReadOnlyProvider(network: string, chainId?: number): ethers.providers.BaseProvider;
export {};
//# sourceMappingURL=urls.d.ts.map