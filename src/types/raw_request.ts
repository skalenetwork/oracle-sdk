import { EthCallParams } from "./eth_call";
import { Uri } from "./shared";

type _BaseRequest = {
    cid: string;
    jsps: string[];
    pow: string | number;
    time: number | string;
    encoding: "json";
};

export type RawOracleHttpsRequest = {
    uri: Uri;
    encoding: string; // JSON only
    trims?: number[];
    post?: string;
    rType: "https";
} & _BaseRequest;

export type RawOracleEthApiRequest = {
    uri: string;
    ethApi: string;
    params: EthCallParams;
    rType: "eth";
} & _BaseRequest;

export type RawOracleRequest = {
    type: "raw";
} & RawOracleEthApiRequest | RawOracleHttpsRequest;