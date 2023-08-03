import {
  OracleFetchOptions,
  OracleContractResponse,
  FormattedOracleRequest,
} from "../types";
import { createRequest } from "../create";
import { checkResult } from "../check";
import { formatResponse } from "../format";
import { submitRequest } from "../submit";
import { formatSubmitRequest } from "../utils";

export default async function sendRequestAndWaitFormatted(
  request: FormattedOracleRequest,
  opts: OracleFetchOptions,
): Promise<OracleContractResponse> {
  const submitRequestData = await createRequest({
    ...request,
    type: "formatted",
  });

  const requestId = await submitRequest(
    formatSubmitRequest(submitRequestData),
    opts,
  );
  console.log(requestId);
  const resultData = await checkResult(requestId, opts);

  return formatResponse(resultData);
}
