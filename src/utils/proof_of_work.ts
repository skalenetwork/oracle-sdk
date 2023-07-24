import { keccak256, toHex } from "viem/utils";
import { MAX_POW_NUMBER, MAX_UINT_256, MIN_POW_NUMBER } from "../constants";


function _format(request: string, time: number, iteration: number) : string {
    return `{${request},"time":${time},"pow":${iteration}}`;
}

/**
 * 
 * @async
 * 
 * @param request The request object
 * @param time The current unix time
 * @returns The request object with additional time and pow values
 */
export default async function proofOfWork(request: string, time: number) : Promise<string> {
    let iterations: number = 0;
    let s: string = "";

    while (iterations < MAX_POW_NUMBER) {
        s = _format(request, time, iterations);
		
        const hash = keccak256(toHex(s));
		
		const res = (MAX_UINT_256 - BigInt(1)) / BigInt(hash);

		if (res > MIN_POW_NUMBER) break;
        
        if(iterations++ % 2_000 === 0) {
            await new Promise<void>((resolve) => setTimeout(resolve, 0));
        }        
    }

    return s;
}