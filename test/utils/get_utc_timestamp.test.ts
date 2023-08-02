import getUTCTimestamp from "../../src/utils/get_utc_timestamp";
import { expect } from "chai";
import { it } from "mocha";

describe("Utils: getUTCTimestamp", () => {
  it("Gets Current Timestamp as String", () => {
    {
      expect(getUTCTimestamp()).to.be.equal(new Date().getTime().toString());
    }
  });
  it("Manual Value", () => {
    {
      expect(getUTCTimestamp(new Date(1690866858000))).to.be.equal(
        new Date("Mon Jul 31 2023 22:14:18 GMT-0700 (Pacific Daylight Time)")
          .getTime()
          .toString()
      );
    }
  });
  it("Get Current Timestamp Type", () => {
    expect(typeof getUTCTimestamp()).to.be.equal("string");
  });
});
