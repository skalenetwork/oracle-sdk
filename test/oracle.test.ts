import { it } from "mocha";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { Oracle } from "../src/oracle";
import { encodeFunctionData, zeroAddress } from "viem";
import { mainnetNFT } from "./claim.contract.json";
// import { skaleChaosTestnet } from "viem/dist/types/chains";
import {
  FormattedOracleEthApiRequest,
  OracleContractResponse,
} from "../src/types";
import { expect } from "chai";

const makeOracleRequest = async () => {
  const account = privateKeyToAccount(generatePrivateKey());

  const oracle = new Oracle({
    nameOrRpcUrl:
      "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
    network: "auto",
  });

  const request = {
    uri: "eth://",
    ethApi: "eth_call",
    params: {
      from: zeroAddress,
      to: mainnetNFT.address as `0x${string}`,
      data: encodeFunctionData({
        abi: JSON.parse(mainnetNFT.abi),
        functionName: "balanceOf",
        args: [account.address],
      }),
      gas: "0xfffff",
    },
  } satisfies FormattedOracleEthApiRequest;

  const [
    cid,
    uri,
    encoding,
    ethApi,
    params,
    jsps,
    trims,
    post,
    time,
    rslts,
    sigs,
  ] = (await oracle.send(request, "contract")) as OracleContractResponse;

  return {
    cid,
    uri,
    encoding,
    ethApi,
    params,
    jsps,
    trims,
    post,
    time,
    rslts,
    sigs,
  };
};

describe("Oracle Claim Test", () => {
  it("Send Request: Valid CID", async () => {
    const { cid } = await makeOracleRequest();

    expect(cid).to.be.equal(1);
    expect(typeof cid).to.be.equal("number");
    expect(cid).to.not.be.equal("1");
    expect(cid).to.not.be.equal(undefined);
    expect(cid).to.not.be.equal(null);
  });

  it("Send Request: Valid URI", async () => {
    const { uri } = await makeOracleRequest();

    expect(uri).to.be.equal("eth://");
    expect(typeof uri).to.be.equal("string");
    expect(uri).to.not.be.equal(undefined);
    expect(uri).to.not.be.equal(null);
  });

  it("Send Request: Valid Encoding", async () => {
    const { encoding } = await makeOracleRequest();
    expect(encoding).to.be.equal("json");
    expect(typeof encoding).to.be.equal("string");
  });

  it("Send Request: Valid Eth Api", async () => {
    const { ethApi } = await makeOracleRequest();
    expect(ethApi).to.be.equal("eth_call");
    expect(typeof ethApi).to.be.equal("string");
    expect(ethApi).to.not.be.equal(undefined);
    expect(ethApi).to.not.be.equal(undefined);
  });

  it("Send Request: Valid Params", async () => {
    const { params } = await makeOracleRequest();
    const [{ from, to, data, gas }, blockTag] = JSON.parse(params);
    expect(typeof params).to.be.equal("string");
    expect(blockTag).to.be.equal("latest");
    expect(from).to.be.equal(zeroAddress);
    expect(to).to.be.equal("0xd53eC40571B36C99073dF1ca3c5b8D5cFeA22E66");
    expect(data.substring(0, 2)).to.be.equal("0x");
    expect(gas).to.be.equal("0xfffff");

    // expect(params).to.be.deep.equal('[{"from":"0x0000000000000000000000000000000000000000","to":"0xd53eC40571B36C99073dF1ca3c5b8D5cFeA22E66","data":"0x70a082310000000000000000000000000aadb5ed4b485c138166c652df74c3a9bb8d8f46","gas":"0xfffff"},"latest"]');
    // expect(paramsObj["from"]).to.to
  });
  it("Send Request: Valid Json Pointers", async () => {
    const { jsps } = await makeOracleRequest();

    expect(jsps).lengthOf(1);
    expect(jsps[0]).to.be.equal("/result");
  });
  it("Send Request: Valid Results", async () => {
    const { rslts } = await makeOracleRequest();
    expect(rslts).lengthOf(1);
    expect(rslts[0]).to.be.equal(
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    );
  });

  it("Send Request: Valid Trims", async () => {
    const { trims } = await makeOracleRequest();
    expect(trims).to.be.equal(undefined);
  });

  it("Send Request: Valid Post", async () => {
    const { post } = await makeOracleRequest();
    expect(post).to.be.equal(undefined);
    expect(post).to.not.be.equal(null);
  });

  it("Send Request: Valid Time", async () => {
    const { time } = await makeOracleRequest();
    expect(time).to.be.gte(1691080588763);
    expect(time).to.not.be.equal(undefined);
    expect(typeof time).to.be.equal("number");
  });

  it("Send Request: Valid Sigs", async () => {
    const { sigs } = await makeOracleRequest();

    expect(sigs).length(4);
    expect(sigs).to.not.be.equal(undefined);
    expect(sigs).to.not.be.equal(null);

    expect(sigs[0].v).to.be.oneOf([0, 27, 28]);
    expect(typeof sigs[0].v).to.be.equal("number");
    expect(sigs[0].r.length).to.be.equal(66);
    expect(sigs[0].s.length).to.be.equal(66);
    expect(sigs[0].r.substring(0, 2)).to.be.equal("0x");
    expect(sigs[0].s.substring(0, 2)).to.be.equal("0x");

    expect(sigs[1].v).to.be.oneOf([0, 27, 28]);
    expect(typeof sigs[1].v).to.be.equal("number");
    expect(sigs[1].r.length).to.be.equal(66);
    expect(sigs[1].s.length).to.be.equal(66);
    expect(sigs[1].r.substring(0, 2)).to.be.equal("0x");
    expect(sigs[1].s.substring(0, 2)).to.be.equal("0x");

    expect(sigs[2].v).to.be.oneOf([0, 27, 28]);
    expect(typeof sigs[2].v).to.be.equal("number");
    expect(sigs[2].r.length).to.be.equal(66);
    expect(sigs[2].s.length).to.be.equal(66);
    expect(sigs[2].r.substring(0, 2)).to.be.equal("0x");
    expect(sigs[2].s.substring(0, 2)).to.be.equal("0x");

    expect(sigs[3].v).to.be.oneOf([0, 27, 28]);
    expect(typeof sigs[3].v).to.be.equal("number");
    expect(sigs[3].r.length).to.be.equal(66);
    expect(sigs[3].s.length).to.be.equal(66);
    expect(sigs[3].r.substring(0, 2)).to.be.equal("0x");
    expect(sigs[3].s.substring(0, 2)).to.be.equal("0x");
  });
});
