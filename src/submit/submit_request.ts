import { OracleSubmitRequest } from "../types";

type SubmitRequestOptions = {
    rpcUrl?: string;
    chainName: ChainName;
}

function _getRPCUrl(opts: SubmitRequestOptions) : string {
    if (opts.rpcUrl) return opts.rpcUrl;
    return chains[opts.chainName];
}

export async function submitRequest(request: OracleSubmitRequest, opts: SubmitRequestOptions) : Promise<string> {
    const response = await fetch(_getRPCUrl(opts), {
		method: "POST",
		body: JSON.stringify(request),
		headers: {
			"Content-Type": "application/json"
		}
	});

    const jsonResponse = await response.json();
    return jsonResponse(jsonResponse["result"]);
}