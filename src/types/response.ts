export type NodeSignature = {
  v: number;
  r: `0x${string}`;
  s: `0x${string}`;
};

export type OracleResponse = {
  cid: string;
  uri: string;
  encoding: string;
  ethApi: string;
  params: string;
  jsps: string[];
  trims: number[];
  post: string;
  time: number;
  rslts: string;
  sigs: NodeSignature[];
};

/** */
export type OracleContractResponse = [
  string,
  string,
  string,
  string,
  string,
  string[],
  number[],
  string,
  number,
  string,
  NodeSignature[],
];
