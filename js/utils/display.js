export const showLoading = (element) => {
    element.style.display = "block";
};

export const hideLoading = (element) => {
    element.style.display = "none";
};

export const showError = (element, message) => {
    element.textContent = message;
    element.style.display = "block";
};

export const hideError = (element) => {
    element.style.display = "none";
};
