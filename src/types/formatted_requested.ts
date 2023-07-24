import { EthCallParams } from "./eth_call";
import { Uri } from "./shared";

/**
 * For GET or POST requests to external apis
 */
export type FormattedOracleHttpsRequest = {
    uri: Uri;
    jsps: string[];
    trims?: number[];
    post?: string;
}

export type EthCallRequest = {
    method: "eth_call";
    params: EthCallParams;
}

export type EthApi = EthCallRequest;

/**
 * For requests to another EVM blockchain
 */
export type FormattedOracleEthApiRequest = {
    uri: string;
    ethApi: EthApi;
}

export type FormattedOracleRequest = {
    type: "formatted";
} | FormattedOracleHttpsRequest | FormattedOracleEthApiRequest;