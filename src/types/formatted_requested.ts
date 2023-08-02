import { EthCallParams } from "./eth_call";
import { Uri } from "./shared";

/**
 * For GET or POST requests to external apis
 */
export type FormattedOracleHttpsRequest = {
  uri: Uri;
  trims?: number[];
  post?: string;
  jsps: string[];
};

export type EthCallRequest = {
  method: "eth_call";
  params: EthCallParams;
};

export type EthApi = EthCallRequest;

/**
 * For requests to another EVM blockchain
 */
export type FormattedOracleEthApiRequest = {
  uri: string;
  ethApi: string;
  params: EthCallParams;
  jsps?: string[];
};

export type FormattedOracleRequest = {
  type: "formatted"
} & FormattedOracleHttpsRequest | FormattedOracleEthApiRequest;
