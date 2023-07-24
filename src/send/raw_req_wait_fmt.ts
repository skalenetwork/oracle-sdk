import { OracleFetchOptions, OracleContractResponse, RawOracleRequest } from "../types";
import { createRequest } from "../create";
import { checkResult } from "../check";
import { formatResponse } from "../format";
import { submitRequest } from "../submit";

export default async function sendRawReqeustAndWaitFormatted(request: RawOracleRequest, opts: OracleFetchOptions) : Promise<OracleContractResponse> {
    const submitRequestData = await createRequest({
        ...request,
        type: "raw"
    });
    const requestId = await submitRequest(submitRequestData, opts);
    const resultData = await checkResult(requestId, opts);
    
    return formatResponse(resultData);
}