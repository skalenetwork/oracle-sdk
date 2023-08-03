import {
  FormattedOracleEthApiRequest,
  FormattedOracleHttpsRequest,
  FormattedOracleRequest,
  OracleContractResponse,
  OracleFetchOptions,
  OracleRequest,
  OracleResponse,
  OracleSubmitRequest,
} from "../types";
import { createRequest } from "../create";
import { checkResult } from "../check";
import { formatResponse } from "../format";
import { submitRequest } from "../submit";
import sendRequestAndWaitFormatted from "../send/req_wait_fmt";
import sendRequestAndWait from "../send/req_wait";

export default class Oracle {
  #opts: OracleFetchOptions;

  constructor(fetchOpts: OracleFetchOptions) {
    this.#opts = fetchOpts;
  }

  public async create(request: OracleRequest): Promise<string> {
    return await createRequest(request);
  }

  public async check(oracleResponseId: string, opts?: OracleFetchOptions) {
    return await checkResult(oracleResponseId, opts ?? this.#opts);
  }

  public format(responseStr: string): OracleContractResponse {
    return formatResponse(responseStr);
  }

  public async send(
    request: FormattedOracleEthApiRequest | FormattedOracleHttpsRequest,
    returnType: "contract" | "raw" = "contract",
    opts?: OracleFetchOptions,
  ): Promise<OracleResponse | OracleContractResponse> {
    const formattedRequest = request as FormattedOracleRequest;
    return returnType === "contract"
      ? await sendRequestAndWaitFormatted(formattedRequest, opts ?? this.#opts)
      : await sendRequestAndWait(formattedRequest, opts ?? this.#opts);
  }

  public async submit(
    oracleSubmitRequest: OracleSubmitRequest,
    opts?: OracleFetchOptions,
  ) {
    return await submitRequest(oracleSubmitRequest, opts ?? this.#opts);
  }
}
