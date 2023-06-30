const link = "https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols="
const symbols = "FTSE:FSI,INX:IOM,EURUSD,GBPUSD,IB.1:IEU"

export const getData = async () => {
    try {
        const data = await fetch(`${link + symbols}`);
        const response = await data.json();
        // console.log(response);
        // if (!response.ok) {
        //     throw new Error("Failed to fetch data from the API.");
        // }
        // console.log(response.data.items);

        return response.data.items;
    } catch (err) {
        console.error(err);
        return null;
    }
};