import {
  MIN_POW_NUMBER,
  MAX_POW_NUMBER,
  MAX_UINT_256,
  ZERO_HASH,
} from "../src/constants";
import { expect } from "chai";
import { it } from "mocha";

describe("Constants", () => {
  it("MIN_POW_NUMBER === 10_000", () =>
    expect(MIN_POW_NUMBER).to.be.equal(10_000));
  it("MAX_POW_NUMBER === 100_000", () =>
    expect(MAX_POW_NUMBER).to.be.equal(100_000));
  it("MAX_UINT_256 === 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", () =>
    expect(MAX_UINT_256).to.be.equal(
      BigInt(
        0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff,
      ),
    ));
  it("ZERO_HASH === 0x0000000000000000000000000000000000000000000000000000000000000000", () =>
    expect(ZERO_HASH).to.be.equal(
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    ));
});
