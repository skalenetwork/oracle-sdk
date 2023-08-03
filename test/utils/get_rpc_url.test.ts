import { getRPCUrl } from "../../src/utils/get_rpc_url";
import { expect } from "chai";
import { it } from "mocha";

describe("Utils: getRPCUrl", () => {
  describe("Chain Names", () => {
    it("Calypso", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "calypso", network: "auto" }),
      ).to.be.equal(
        "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
      );
    });
    it("Calypso Testnet", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "calypso-testnet", network: "auto" }),
      ).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
      );
    });
    it("Chaos Testnet", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "chaos-testnet", network: "auto" }),
      ).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
      );
    });
    it("Europa", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "europa", network: "auto" }),
      ).to.be.equal("https://mainnet.skalenodes.com/v1/elated-tan-skat");
    });
    it("Europa Testnet", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "europa-testnet", network: "auto" }),
      ).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
      );
    });
    it("Nebula", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "nebula", network: "auto" }),
      ).to.be.equal("https://mainnet.skalenodes.com/v1/green-giddy-denebola");
    });
    it("Nebula Testnet", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "nebula-testnet", network: "auto" }),
      ).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
      );
    });
    it("Titan", () => {
      expect(getRPCUrl({ nameOrRpcUrl: "titan", network: "auto" })).to.be.equal(
        "https://mainnet.skalenodes.com/v1/parallel-stormy-spica",
      );
    });
    it("Titan Testnet", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "titan-testnet", network: "auto" }),
      ).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar",
      );
    });
  });
  describe("RPC Urls", () => {
    it("Manually passed RPC resolves to passed value", () => {
      expect(
        getRPCUrl({ nameOrRpcUrl: "https://", network: "auto" }),
      ).to.be.equal("https://");
    });
  });
});
