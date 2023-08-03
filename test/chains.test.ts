import { describe } from "mocha";
import { chains } from "../src/chains/index";
import { expect } from "chai";

describe("Chains", () => {
  describe("Available", () => {
    it("Calypso", () => {
      expect(chains.calypso).to.not.be.equal(undefined);
      expect(chains.calypso).to.be.equal(
        "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
      );
    });
    it("Calypso Testnet", () => {
      expect(chains["calypso-testnet"]).to.not.be.equal(undefined);
      expect(chains["calypso-testnet"]).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
      );
    });
    it("Chaos Testnet", () => {
      expect(chains["chaos-testnet"]).to.not.be.equal(undefined);
      expect(chains["chaos-testnet"]).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
      );
    });
    it("Europa", () => {
      expect(chains.europa).to.not.be.equal(undefined);
      expect(chains.europa).to.be.equal(
        "https://mainnet.skalenodes.com/v1/elated-tan-skat",
      );
    });
    it("Europa Testnet", () => {
      expect(chains["europa-testnet"]).to.not.be.equal(undefined);
      expect(chains["europa-testnet"]).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
      );
    });
    it("Nebula", () => {
      expect(chains.nebula).to.not.be.equal(undefined);
      expect(chains.nebula).to.be.equal(
        "https://mainnet.skalenodes.com/v1/green-giddy-denebola",
      );
    });
    it("Nebula Testnet", () => {
      expect(chains["nebula-testnet"]).to.not.be.equal(undefined);
      expect(chains["nebula-testnet"]).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
      );
    });
    it("Titan", () => {
      expect(chains.titan).to.not.be.equal(undefined);
      expect(chains.titan).to.be.equal(
        "https://mainnet.skalenodes.com/v1/parallel-stormy-spica",
      );
    });
    it("Titan Testnet", () => {
      expect(chains["titan-testnet"]).to.not.be.equal(undefined);
      expect(chains["titan-testnet"]).to.be.equal(
        "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar",
      );
    });
  });
  describe("Unavailable", () => {
    it("Ethereum", () => {
      expect(chains.ethereum).to.be.equal(undefined);
    });
    it("Foo", () => {
      expect(chains.foo).to.be.equal(undefined);
    });
    it("Bar", () => {
      expect(chains.bar).to.be.equal(undefined);
    });
  });
});
