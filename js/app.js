import { createElement } from "./utils/createElement.js";


const container = document.querySelector(".stocks");

const appendListItems = async () => {
    const elements = await createElement();
    container.append(elements);
};

appendListItems();