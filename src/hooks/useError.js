import { useState } from "react";

export const useError = (iniData = {}) => {
  const [errorData, setErrorData] = useState(iniData);

  const clearAllError = () => {
    setErrorData(iniData);
  };

  const clearError = (name) => {
    setErrorData((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const setError = (name, value) => {
    setErrorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    clearAllError,
    clearError,
    setError,
    errorData,
  };
};
