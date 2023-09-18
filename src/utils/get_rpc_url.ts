import { chains } from "../chains";
import { OracleFetchOptions } from "../types";

export function getRPCUrl(opts: OracleFetchOptions): string {
  return chains[opts.nameOrRpcUrl] ?? opts.nameOrRpcUrl;
}
