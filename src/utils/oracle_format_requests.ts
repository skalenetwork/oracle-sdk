import { OracleSubmitRequest, OracleCheckResult } from "../types/oracle";

function _format(
  param: string,
  method: "oracle_checkRequest" | "oracle_submitRequest",
): OracleCheckResult | OracleSubmitRequest {
  return {
    id: 83,
    jsonrpc: "2.0",
    method,
    params: [param],
  } as OracleCheckResult | OracleSubmitRequest;
}

export function formatCheckResult(param: string): OracleCheckResult {
  return _format(param, "oracle_checkRequest") as OracleCheckResult;
}

export function formatSubmitRequest(param: string): OracleSubmitRequest {
  return _format(param, "oracle_submitRequest") as OracleSubmitRequest;
}
