export type OracleSubmitRequest = {
    id: number;
    jsonrpc: "2.0";
    method: "oracle_submitRequest";
    params: [string];
}

export type OracleCheckResult = {
    id: number;
    jsonrpc: "2.0";
    method: "oracle_checkResult";
    params: [string];
}

export type RpcUrl = `http://${string}` | `https://${string}`;

export type OracleFetchOptions = {
    nameOrRpcUrl: string;
    network: "mainnet" | "testnet" | "auto";
}