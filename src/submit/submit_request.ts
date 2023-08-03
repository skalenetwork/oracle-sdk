import { FETCH_HEADERS, FETCH_METHOD } from "../constants";
import { OracleSubmitRequest, OracleFetchOptions } from "../types";
import { getRPCUrl } from "../utils";

export default async function submitRequest(
  request: OracleSubmitRequest,
  opts: OracleFetchOptions,
): Promise<string> {
  const response = await fetch(getRPCUrl(opts), {
    method: FETCH_METHOD,
    body: JSON.stringify(request),
    headers: FETCH_HEADERS,
  });

  const json = await response.json();
  return json.result;
}
