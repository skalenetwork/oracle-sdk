import { formatCheckResult, getRPCUrl } from "../utils";
import { OracleFetchOptions } from "../types";

// TODO - Fix this/change this, maybe update the type to reduce number of checks
function _getMaxIterations(opts: OracleFetchOptions) {
  if (opts.network === "auto") {
    if (
      opts.nameOrRpcUrl.includes("staging") ||
      opts.nameOrRpcUrl.includes("testnet")
    ) {
      return 3;
    } else {
      return 15;
    }
  } else if (opts.network === "mainnet") {
    return 15;
  } else if (opts.network === "testnet") {
    return 3;
  } else {
    throw new Error("Invalid Network Configuration");
  }
}

export async function checkResult(
  oracleResponseId: string,
  opts: OracleFetchOptions,
): Promise<string> {
  const req = formatCheckResult(oracleResponseId);

  let i = 0;
  const maxIterations = _getMaxIterations(opts);

  while (i < maxIterations) {
    const check = await fetch(getRPCUrl(opts), {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await check.json();
    console.log(JSON.stringify(response));
    console.log(`Response ${i}: ${response}`)
    if (response["error"]) {
      await new Promise((resolve) => setTimeout(resolve, 2500));
    } else {
      return response.result;
    }

    i++;
  }

  throw new Error("Could Not Find Result");
}
