import { pad } from "viem";
import { OracleContractResponse } from "../types";
import { ZERO_HASH } from "../constants";

export default function formatResponse(
  responseStr: string,
): OracleContractResponse {
  const response = JSON.parse(responseStr);
  return [
    response.cid,
    response.uri,
    response.encoding,
    response.ethApi,
    JSON.stringify(response.params),
    response.jsps,
    response.trims,
    response.post,
    response.time,
    response.rslts,
    response.sigs.map((sig: string) => {
      if (sig === null) {
        return {
          v: 0,
          r: ZERO_HASH,
          s: ZERO_HASH,
        };
      } else {
        const splitVals = sig.split(":");
        return {
          v: splitVals[0] === "0" ? 27 : 28,
          r: pad(
            ("0x" +
              (splitVals[1].length % 2 === 0
                ? splitVals[1]
                : "0" + splitVals[1])) as `0x${string}`,
          ),
          s: pad(
            ("0x" +
              (splitVals[2].length % 2 === 0
                ? splitVals[2]
                : "0" + splitVals[2])) as `0x${string}`,
          ),
        };
      }
    }),
  ];
}
