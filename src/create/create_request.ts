import { encodeFunctionData } from "viem";
import {
  FormattedOracleEthApiRequest,
  FormattedOracleHttpsRequest,
  FormattedOracleRequest,
  RawOracleEthApiRequest,
  RawOracleHttpsRequest,
  RawOracleRequest,
  UnformattedEthCallData
} from "../types";
import { getUTCTimestamp, proofOfWork } from "../utils";
/**
 *
 * @param method the ethApi method from the request
 *
 * @description Currently only eth_call is supported. Upon addition of multiple will change this to an object to attain O(1) lookup time for keys with undefined meaning invalid
 */

function _validateJsps(jsps: string[]) {
  if (jsps.length === 0) throw new Error("Must have at least one jsps");
  if (jsps.length >= 32) throw new Error("Exceeded Maximum amount of JSPS");
}

function _handleData(data: `0x${string}` | UnformattedEthCallData) {
  if (data.toString().startsWith("0x")) return data;
  else {
    const callData = data as UnformattedEthCallData;
    return encodeFunctionData({
      ...callData,
    });
  }
}

export default async function createRequest(request: FormattedOracleRequest | RawOracleRequest) {
  if (request.jsps) _validateJsps(request.jsps);
  let obj = {} as any;
  obj["cid"] = 1;
  obj["encoding"] = "json";
  obj["uri"] = request.uri;
  obj["jsps"] = request.jsps ?? ["/result"];

  if (Object.keys(request).includes("ethApi")) {
    const ethRequest = request as FormattedOracleEthApiRequest | RawOracleEthApiRequest;
    obj["ethApi"] = ethRequest.ethApi;
    obj["params"] = [{
      from: ethRequest.params.from,
      to: ethRequest.params.to,
      data: _handleData(ethRequest.params.data),
      gas: ethRequest.params.gas
    }, ethRequest.params.blockTag ?? "latest"]
  } else {
    const httpRequest = request as FormattedOracleHttpsRequest | RawOracleHttpsRequest;
    if (httpRequest.post) obj["post"] = httpRequest.post;
    if (httpRequest.trims) obj["trims"] = httpRequest.trims;
  }

  const requestStr = JSON.stringify(obj);
  
  return await proofOfWork(
    requestStr.slice(1, requestStr.length - 1),
    getUTCTimestamp()
  );
}
