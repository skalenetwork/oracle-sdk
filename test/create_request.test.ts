import { it } from "mocha";
import { expect } from "chai";
import { defaultRawHttpsRequest, defaultRawEthRequest, defaultFormattedHttpsRequest, defaultFormattedEthRequest } from "./fixtures";

describe("createRequest(request: OracleRequest)", () => {
    describe("Raw Request", () => {
        xit("HTTPS - Failure", async () => {
            /// TODO Fix Broken Test
            // expect(async() => await defaultRawHttpsRequest(false)).to.throw(new Error("Must have at least one jsps"));
        });
        it("HTTPS - Success", async () => {
            const request = await defaultRawHttpsRequest();
            expect(request).to.contain("{");
            expect(request).to.contain("}");
            expect(request.substring(0, 1)).to.equal("{");
            expect(request.substring(request.length - 1)).to.equal("}");
            expect(request).to.contain("}");
            expect(request).to.contain('"cid":"1"');
            expect(request).to.contain('"uri":"https://www.binance.com/api/v3/time"');
            expect(request).to.contain('"jsps":["/serverTime"]')
            expect(request).to.contain('"trims":[4]');
            expect(request).to.contain('"encoding":"json"');
            expect(request).to.contain('"time":1649253252000'); /// TODO FiX
        });
        it("ETH - Success", async() => {
            const request = await defaultRawEthRequest();
            expect(request).to.contain("{");
            expect(request).to.contain("}");
            expect(request.substring(0, 1)).to.equal("{");
            expect(request.substring(request.length - 1)).to.equal("}");
            expect(request).to.contain("}");
            expect(request).to.contain('"cid":"1"');
            expect(request).to.contain('"uri":"eth://"');
            expect(request).to.contain('"jsps":["/result"]')
            expect(request).to.contain('"encoding":"json"');
            console.log(request);
            expect(request).to.contain('"time":1649253252000'); /// TODO FIX
        });
    })
    describe("Formatted Request", () => {
        xit("HTTPS - Failure", async() => {
            /// TODO Fix Broken Test
            // const request = await defaultFormattedHttpsRequest(false);
        })
        it("HTTPS - Success", async() => {
            const request = await defaultFormattedHttpsRequest(true);
            expect(request).to.contain("{");
            expect(request).to.contain("}");
            expect(request.substring(0, 1)).to.equal("{");
            expect(request.substring(request.length - 1)).to.equal("}");
            expect(request).to.contain("}");
            expect(request).to.contain('"cid":1');
            expect(request).to.contain('"uri":"https://www.binance.com/api/v3/time"');
            expect(request).to.contain('"jsps":["/serverTime"]')
            expect(request).to.contain('"trims":[4]');
            expect(request).to.contain('"encoding":"json"');
            expect(request).to.contain('"time":');
        })
        it("ETH - Success", async() => {
            const request = await defaultFormattedEthRequest();
            expect(request).to.contain("{");
            expect(request).to.contain("}");
            expect(request.substring(0, 1)).to.equal("{");
            expect(request.substring(request.length - 1)).to.equal("}");
            expect(request).to.contain("}");
            expect(request).to.contain('"cid":1');
            expect(request).to.contain('"uri":"eth://"');
            expect(request).to.contain('"jsps":["/result"]')
            expect(request).to.contain('"encoding":"json"');
            expect(request).to.contain('"time"');
        });
    });
})