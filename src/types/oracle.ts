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