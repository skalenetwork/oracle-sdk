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

export type OracleFetchOptions = {
    rpcUrl?: string;
    chainName: ChainName;
    isTestnet: boolean; /// Required parameter as it changes the number of checks on check results
}