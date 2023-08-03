import { OracleSubmitRequest, OracleFetchOptions } from "../types";
import { getRPCUrl } from "../utils";

export default async function submitRequest(
  request: OracleSubmitRequest,
  opts: OracleFetchOptions,
): Promise<string> {
  const response = await fetch(getRPCUrl(opts), {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  return json["result"];
}
