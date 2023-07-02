import { createElement } from "./utils/createElement.js";
import { showLoading, hideLoading, showError, hideError } from "./utils/display.js";

const container = document.querySelector(".stocks");
const loadingElement = container.querySelector(".loading");
const errorElement = container.querySelector(".error");

const appendListItems = async () => {
  try {
    showLoading(loadingElement);
    hideError(errorElement);

    const elements = await createElement();
    if (!elements) {
      throw new Error("Invalid data received");
    }
    container.append(elements);
  } catch (err) {
    showError(errorElement, err.message);
  } finally {
    hideLoading(loadingElement);
  }
};

appendListItems();
