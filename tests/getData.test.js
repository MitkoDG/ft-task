const { expect } = require("chai");
const { getData } = require("../js/api/api");

describe("getData", () => {
    it("should fetch and return data from the API", async () => {
        const data = await getData();
        expect(data).to.be.an("array"); // Assuming the API response returns an array of items
        expect(data).to.have.lengthOf.at.least(1); // Assuming there is at least one item in the response
    });

    it("should handle API fetch errors and return null", async () => {
        const invalidSymbols = "INVALID_SYMBOLS";
        const originalSymbols = symbols;
        symbols = invalidSymbols;

        const data = await getData();
        expect(data).to.be.null;

        // Restoring the original symbols for subsequent tests
        symbols = originalSymbols;
    });
});


