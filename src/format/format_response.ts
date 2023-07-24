import { OracleContractResponse, OracleResponse } from "../types";

export default function formatResponse(
  response: OracleResponse,
): OracleContractResponse {
  return [
    response.cid,
    response.uri,
    response.encoding,
    response.ethApi,
    response.params,
    response.jsps,
    response.trims,
    response.post,
    response.time,
    response.rslts,
    response.sigs,
  ];
}
