import { OracleFetchOptions } from "../types";

export function getRPCUrl(opts: OracleFetchOptions) : string {
    if (opts.rpcUrl) return opts.rpcUrl;
    return chains[opts.chainName];
}