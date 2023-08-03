import { it } from "mocha";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { Oracle } from "../src/oracle";
import { encodeFunctionData, zeroAddress } from "viem";
import {
    mainnetNFT,
} from "./claim.contract.json";
// import { skaleChaosTestnet } from "viem/dist/types/chains";
import { FormattedOracleEthApiRequest, OracleContractResponse } from "../src/types";
import { expect } from "chai";

describe("Oracle Claim Test", () => {
    const account = privateKeyToAccount(generatePrivateKey());
    // const client = createPublicClient({
    //     chain: skaleChaosTestnet,
    //     transport: webSocket("wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix")
    // });
    // const contract = getContract({
    //     abi: JSON.parse(mainnetNFT.abi) as any,
    //     address: mainnetNFT.address as `0x${string}`
    // });

    const oracle = new Oracle({
        nameOrRpcUrl: "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
        network: "auto"
    });
    
    const request = {
		uri: "eth://",
		ethApi: "eth_call",
		"params": {
			"from": zeroAddress,
			"to": mainnetNFT.address as `0x${string}`,
			"data": encodeFunctionData({
                abi: JSON.parse(mainnetNFT.abi),
                functionName: "balanceOf",
                args: [account.address]
            }),
            "gas": "0xfffff",
        }
	} satisfies FormattedOracleEthApiRequest;
    
    it("Send Request: Contract Response", async() => {
        const res = await oracle.send(request, "contract") as OracleContractResponse;
        expect(res[0]).to.be.equal(1);
    })

});