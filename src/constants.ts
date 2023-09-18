/**
 * @name MIN_POW_NUMBER
 *
 * @description The minimum number of iterations that can be used in Proof of Work for an oracle request
 */
export const MIN_POW_NUMBER = 10_000 as const;

/**
 * @name MIN_POW_NUMBER
 *
 * @description The maximum number of iterations that can be used in Proof of Work for an oracle request
 */
export const MAX_POW_NUMBER = 100_000 as const;

/**
 * @name MAX_UINT_256
 *
 * @description The maximum value of a uint256 in solidity i.e uint256(-1)
 */
export const MAX_UINT_256: bigint =
  BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);

/** Bytes32 Zero hash */
export const ZERO_HASH =
  "0x0000000000000000000000000000000000000000000000000000000000000000" as const;

/**
 * @name FETCH_METHOD
 *
 * @description The method used when calling oracle rpc method
 */
export const FETCH_METHOD = "POST" as const;

/**
 * @name FETCH_HEADERS
 *
 * @description Headers for calling oracle rpc method
 */
export const FETCH_HEADERS = {
  "Content-Type": "application/json",
} as const;
