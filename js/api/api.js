import { handleFetchError } from "../utils/handleFetchError.js";

const link = "https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=";
const symbols = "FTSE:FSI,INX:IOM,EURUSD,GBPUSD,IB.1:IEU";

export const getData = async () => {
  try {
    const data = await fetch(`${link + symbols}`);
    const response = await data.json();

    if (response.error && response.error.code === 400) {
      throw await handleFetchError(response);
    }

    return response.data.items;
  } catch (err) {
    console.error(err);
    // return err;
  }
};
