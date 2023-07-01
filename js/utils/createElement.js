import { getData } from "../api/api.js";

const link = "https://www.ft.com/";

const names = {
    "FTSE:FSI": "FTSE 100",
    "INX:IOM": "S&P 500",
    "EURUSD": "Euro/Dollar",
    "GBPUSD": "Pound/Dollar",
    "IB.1:IEU": "Brent Crude Oil",
};

export const createElement = async () => {
    try {
        const data = await getData();

        console.log(data);
        if (!data || !Array.isArray(data)) {
            throw new Error("Invalid data received");
        }

        const ulEl = document.createElement("ul");

        data.forEach((item) => {
            const liEl = document.createElement("li");
            const aEl = document.createElement("a");
            aEl.href = link;

            const spanNameEl = document.createElement("span");
            const spanValueEl = document.createElement("span");
            spanValueEl.classList.add("change");

            const symbol = item.basic.symbol;
            spanNameEl.textContent = names[symbol];

            const value = item.quote.change1DayPercent.toFixed(2);
            spanValueEl.textContent = `${value}%`;

            if (value > 0) {
                spanValueEl.classList.add("positive");
            } else if (value < 0) {
                spanValueEl.classList.add("negative");
            } else {
                spanValueEl.classList.add("neutral");
            }

            aEl.append(spanNameEl, spanValueEl);
            liEl.append(aEl);
            ulEl.append(liEl);
        });

        return ulEl;
    } catch (err) {
        console.error("Error:", err);
        // return err;
    }
};
