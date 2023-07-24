import {
  FormattedOracleRequest,
  OracleRequest,
  RawOracleRequest,
} from "../types";
import { getUTCTimestamp, proofOfWork, formatSubmitRequest } from "../utils";
/**
 *
 * @param method the ethApi method from the request
 *
 * @description Currently only eth_call is supported. Upon addition of multiple will change this to an object to attain O(1) lookup time for keys with undefined meaning invalid
 */
function _validateEthApiMethod(method: string) {
  if (method !== "eth_call")
    throw new Error("Only eth_call is currently supported");
}

function _formatJsps(jsps: string[]) {
  return `[${jsps.join(",")}]`;
}

function _formatTrims(trims: number[]) {
  return `[${trims.join(",")}]`;
}

function _addTrims(trims?: number[]) {
  if (trims) {
    return `"trims":${_formatTrims(trims)},`;
  }
}

function _addPost(post?: string) {
  if (post) {
    return `"post":${post.trim()},`;
  }
}

function _validateJsps(jsps: string[]) {
  if (jsps.length === 0) throw new Error("Must have at least one jsps");
  if (jsps.length >= 32) throw new Error("Exceeded Maximum amount of JSPS");
}

export default async function createRequest(request: OracleRequest) {
  _validateJsps(request.jsps);
  let finalStringRequest: string = "";
  if (request.type === "raw") {
    const rawRequest = request as RawOracleRequest;
    if (rawRequest.rType === "eth") {
      _validateEthApiMethod(rawRequest.ethApi);
      finalStringRequest = `{"cid":${rawRequest.cid},"uri":${rawRequest.uri},"ethApi":${rawRequest.ethApi},"params":[{"from":${rawRequest.params.from},"to":${rawRequest.params.to},"data":${rawRequest.params.data},"gas":${rawRequest.params.gas}, "latest"]},"encoding":${rawRequest.encoding},"time":${rawRequest.time},"pow":${rawRequest.pow}}`;
    } else {
      finalStringRequest = `{"cid":${rawRequest.cid},"uri":${
        rawRequest.uri
      },"jsps":${_formatJsps(rawRequest.jsps)},${_addTrims(
        rawRequest.trims,
      )}${_addPost(rawRequest.post)}"encoding":${rawRequest.encoding},"time":${
        rawRequest.time
      },"pow":${rawRequest.pow}}`;
    }
  } else if (request.type === "formatted") {
    const formattedRequest = request as FormattedOracleRequest;
    if (formattedRequest.fType === "eth") {
      _validateEthApiMethod(formattedRequest.ethApi.method);
      finalStringRequest = `{"cid":1,"uri":${
        formattedRequest.uri
      },"jsps":${_formatJsps(formattedRequest.jsps)},"params":[{"from":${
        formattedRequest.ethApi.params.from
      },"to":${formattedRequest.ethApi.params},"data":${
        formattedRequest.ethApi.params.data
      },"gas":${
        formattedRequest.ethApi.params.gas
      }, "latest"]},"encoding":"json"}`;
    } else {
      finalStringRequest = `{"cid":1,"uri":${
        formattedRequest.uri
      },"jsps":${_formatJsps(formattedRequest.jsps)}},${_addTrims(
        formattedRequest.trims,
      )}${_addPost(formattedRequest.post)}"encoding":"json"}`;
    }
    finalStringRequest = await proofOfWork(
      finalStringRequest,
      getUTCTimestamp(),
    );
  } else {
    throw new Error("Invalid Request Type");
  }

  if (finalStringRequest === "") throw new Error("Failed to Create Request");

  return formatSubmitRequest(finalStringRequest);
}
