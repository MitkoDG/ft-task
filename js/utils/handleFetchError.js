export const handleFetchError = async (response) => {
    if (response.error.code === 400) {
      const errorMessage = response.error.errors[0].message;
    //   throw new Error(errorMessage);
    throw errorMessage;
    } else {
      throw new Error("Failed to fetch data from the API.");
    }
  };  