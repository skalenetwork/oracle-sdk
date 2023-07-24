import { Abi } from "viem";

/**
 * @description Use for when you want to let the sdk handle generating the data for you
 */
export type UnformattedEthCallData = {
    abi: Abi | any;
    function: string;
    args: any[];
}

/**
 * @description For use with eth_call for ethApi. Use when generating all data on your end
 */
export type EthCallParams = {
    from: `0x${string}`;
    to: `0x${string}`;
    data: `0x${string}` | UnformattedEthCallData;
    gas: `0x${string}`;
};