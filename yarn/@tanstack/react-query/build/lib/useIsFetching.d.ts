import type { QueryKey, QueryFilters } from '@tanstack/query-core';
import type { ContextOptions } from './types';
interface Options extends ContextOptions {
}
export declare function useIsFetching(filters?: QueryFilters, options?: Options): number;
export declare function useIsFetching(queryKey?: QueryKey, filters?: QueryFilters, options?: Options): number;
export {};
