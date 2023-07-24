import { RpcUrl } from "../types";

const _getMainnetRPC = (name: string): RpcUrl =>
  `https://mainnet.skalenodes.com/v1/${name}`;
const _getTestnetRPC = (name: string): RpcUrl =>
  `https://staging-v3.skalenodes.com/v1/${name}`;

export const chains: { [key: string]: RpcUrl } = {
  calypso: _getMainnetRPC("honoable-steel-rasalhague"),
  "calypso-testnet": _getTestnetRPC("staging-utter-unripe-menkar"),
  "chaos-testnet": _getTestnetRPC("staging-fast-active-bellatrix"),
  europa: _getMainnetRPC("elated-tan-skat"),
  "europa-testnet": _getTestnetRPC("staging-legal-crazy-castor"),
  nebula: _getMainnetRPC("green-giddy-denebola"),
  "nebula-testnet": _getTestnetRPC("staging-faint-slimy-achird"),
  titan: _getMainnetRPC("parallel-stormy-spica"),
  "titan-testnet": _getTestnetRPC("staging-aware-chief-gianfar"),
};
