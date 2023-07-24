import { OracleFetchOptions, OracleResponse, RawOracleRequest } from "../types";
import { createRequest } from "../create";
import { checkResult } from "../check";
import { submitRequest } from "../submit";

export default async function sendRawRequestAndWait(request: RawOracleRequest, opts: OracleFetchOptions) : Promise<OracleResponse> {
    const submitRequestData = await createRequest({
        ...request,
        type: "raw"
    });
    const requestId = await submitRequest(submitRequestData, opts);
    const resultData = await checkResult(requestId, opts);
    
    return resultData;
}