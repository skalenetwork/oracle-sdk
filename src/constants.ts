/**
 * @name MIN_POW_NUMBER
 *
 * @description The minimum number of iterations that can be used in Proof of Work for an oracle request
 */
export const MIN_POW_NUMBER = 10_000;

/**
 * @name MIN_POW_NUMBER
 *
 * @description The maximum number of iterations that can be used in Proof of Work for an oracle request
 */
export const MAX_POW_NUMBER = 100_000;

/**
 * @name MAX_UINT_256
 *
 * @description The maximum value of a uint256 in solidity i.e uint256(-1)
 */
export const MAX_UINT_256 =
  BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);

/** Bytes32 Zero hash */
export const ZERO_HASH: `0x${string}` =
  "0x0000000000000000000000000000000000000000000000000000000000000000" as const;
