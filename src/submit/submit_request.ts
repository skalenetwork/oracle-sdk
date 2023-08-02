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

  const jsonResponse = await response.json();
  console.log("Json Response: ", jsonResponse);
  return JSON.parse(jsonResponse.result);
}
