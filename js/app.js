import { createElement } from "./utils/createElement.js";

const container = document.querySelector(".stocks");
const loadingElement = container.querySelector(".loading");
const errorElement = container.querySelector(".error");

const appendListItems = async () => {
  try {
    loadingElement.style.display = "block";
    errorElement.style.display = "none";

    const elements = await createElement();
    if (!elements) {
      throw new Error("Invalid data received");
    }
    container.append(elements);
  } catch (error) {
    errorElement.textContent = error.message;
    errorElement.style.display = "block";
  } finally {
    loadingElement.style.display = "none";
  }
};

appendListItems();
