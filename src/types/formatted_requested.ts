import { EthCallParams } from "./eth_call";
import { Uri } from "./shared";

type _BaseRequest = {
    jsps: string[];
}

/**
 * For GET or POST requests to external apis
 */
export type FormattedOracleHttpsRequest = {
    uri: Uri;
    trims?: number[];
    post?: string;
    fType: "https";
} & _BaseRequest;

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
    fType: "eth";
} & _BaseRequest;

export type FormattedOracleRequest = {
    type: "formatted";
} & FormattedOracleHttpsRequest | FormattedOracleEthApiRequest;