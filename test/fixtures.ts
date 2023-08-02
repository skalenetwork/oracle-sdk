import { createRequest } from "../src/create";
import { EthCallParams } from "../src/types";

const chaosRPCUrl =
  "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix";
const chaosOracleAddress = "0x2522A38913e12c021491AD91e8bB41b40C3845a9";

const cid = 1;
const uri = "https://www.binance.com/api/v3/time";
const encoding = "json";
const ethApi = "eth_call";
const ethApiNull = "";
const params: EthCallParams = {
  from: "0x0000000000000000000000000000000000000000",
  to: "0xd53eC40571B36C99073dF1ca3c5b8D5cFeA22E66",
  data: "0x70a0823100000000000000000000000093b603501aae5145c97314cf1abce76a3efd65fb",
  gas: "0xfffff",
};
const paramsNull = "";
const jsps: string[] = ["/serverTime"];
const jspsNull: string[] = [];
const jspsMany: string[] = ["/serverTime", "/serverTime2", "/serverTime3"];
const trims: number[] = [4];
const trimsNull: number[] = [];
const trimsMany: number[] = [1, 2, 3];
const post = "wow_what_a_post_string";
const postNull = "";
const time = 1649253252000;
const rslts: string[] = ["164925325"];
const rsltsNull: string[] = [];
const rsltsMany: string[] = ["164925325", "164928325", "164926325"];
const sigs: { v: number; r: string; s: string }[] = [
  {
    v: 0,
    r: "0x0000000000000000000000000000000000000000000000000000000000000000",
    s: "0x0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    v: 0,
    r: "0x0000000000000000000000000000000000000000000000000000000000000000",
    s: "0x0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    v: 0,
    r: "0x0000000000000000000000000000000000000000000000000000000000000000",
    s: "0x0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    v: 0,
    r: "0x0000000000000000000000000000000000000000000000000000000000000000",
    s: "0x0000000000000000000000000000000000000000000000000000000000000000",
  },
];

export async function defaultRawHttpsRequest(successful: boolean = true) {
  return await createRequest({
    // type: "raw",
    uri,
    jsps: successful ? jsps : jspsNull,
    trims: successful ? trims : trimsNull,
    encoding: "json",
    cid: cid.toString(),
    time,
  });
}

export async function defaultRawEthRequest() {
  return await createRequest({
    type: "raw",
    uri: "eth://",
    ethApi,
    params: params,
    jsps: ["/result"],
    trims: trims,
    encoding: "json",
    cid: cid.toString(),
    time,
  });
}

export async function defaultFormattedHttpsRequest(successful: boolean = true) {
  return await createRequest({
    type: "formatted",
    uri,
    jsps: successful ? jsps : jspsNull,
    trims: successful ? trims : trimsNull,
  });
}

export async function defaultFormattedEthRequest() {
  return await createRequest({
    uri: "eth://",
    ethApi,
    jsps: ["/result"],
    params: params
  });
}

export {
  chaosOracleAddress,
  chaosRPCUrl,
  cid,
  uri,
  encoding,
  ethApi,
  ethApiNull,
  params,
  paramsNull,
  jsps,
  jspsNull,
  jspsMany,
  trims,
  trimsNull,
  trimsMany,
  post,
  postNull,
  time,
  rslts,
  rsltsNull,
  rsltsMany,
  sigs,
};
