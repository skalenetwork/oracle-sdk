import { Uri } from "./shared";

export type RawOracleHttpsRequest = {
    cid: number;
    uri: Uri;
    jsps: string[];
    time: number;
    encoding: string; // JSON only
    trims?: number[];
    post?: string;
    pow: string | number;
}

export type RawOracleEthApiRequest = {
    cid: number;
    uri: string;
    time: number;
    ethApi: string;
    params: string;
}

export type RawOracleRequest = {
    type: "raw";
} | RawOracleEthApiRequest | RawOracleHttpsRequest;