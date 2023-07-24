import { formatCheckResult, getRPCUrl } from "../utils";
import { OracleFetchOptions, OracleResponse } from "../types";

export async function checkResult(oracleResponseId: string, opts: OracleFetchOptions) : Promise<OracleResponse> {
    const req = formatCheckResult(oracleResponseId);
    
    let i = 0;
    let maxIterations = opts.isTestnet ? 3 : 15;

    while (i < maxIterations) {
		const check = await fetch(getRPCUrl(opts), {
            method: "POST",
            body: JSON.stringify(req),
            headers: {
                "Content-Type": "application/json"
            }
        });

		const response = await check.json();

		if (response["error"]) {
			await new Promise(resolve => setTimeout(resolve, 2500));
		} else {
			return response as OracleResponse;
		}

        i++;
	}

	throw new Error("Could Not Find Result");
}