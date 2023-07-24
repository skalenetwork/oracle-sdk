import {
  OracleFetchOptions,
  OracleResponse,
  FormattedOracleRequest,
} from "../types";
import { createRequest } from "../create";
import { checkResult } from "../check";
import { submitRequest } from "../submit";

export default async function sendRequestAndWait(
  request: FormattedOracleRequest,
  opts: OracleFetchOptions,
): Promise<OracleResponse> {
  const submitRequestData = await createRequest({
    ...request,
    type: "formatted",
  });

  const requestId = await submitRequest(submitRequestData, opts);
  const resultData = await checkResult(requestId, opts);

  return resultData;
}
