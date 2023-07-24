import { FormattedOracleRequest } from "./formatted_requested";
import { RawOracleRequest } from "./raw_request";

export type OracleRequest = {
    type: "raw" | "formatted";
} | FormattedOracleRequest | RawOracleRequest;