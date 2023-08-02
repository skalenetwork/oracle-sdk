import { EthCallParams } from "./eth_call";
import { Uri } from "./shared";

type _BaseRequest = {
  cid: string;
  jsps: string[];
  trims?: number[];
  time: number | string;
  encoding: "json";
};

export type RawOracleHttpsRequest = {
  uri: Uri;
  encoding: string; // JSON only
  post?: string;
} & _BaseRequest;

export type RawOracleEthApiRequest = {
  uri: string;
  ethApi: string;
  params: EthCallParams;
} & _BaseRequest;

export type RawOracleRequest = {
  type: "raw"
} & RawOracleEthApiRequest | RawOracleHttpsRequest;
