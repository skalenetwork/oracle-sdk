import {
  OracleFetchOptions,
  OracleContractResponse,
  FormattedOracleRequest,
} from "../types";
import { createRequest } from "../create";
import { checkResult } from "../check";
import { formatResponse } from "../format";
import { submitRequest } from "../submit";

export default async function sendRequestAndWaitFormatted(
  request: FormattedOracleRequest,
  opts: OracleFetchOptions,
): Promise<OracleContractResponse> {
  const submitRequestData = await createRequest({
    ...request,
    type: "formatted",
  });

  const requestId = await submitRequest(submitRequestData, opts);
  const resultData = await checkResult(requestId, opts);

  return formatResponse(resultData);
}
