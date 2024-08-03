"use client";

import { useCallback, useState } from "react";

type ErrorState = string;

const useErrorHandler = (initialState: ErrorState = "") => {
  const [error, setError] = useState<ErrorState>(initialState);

  const triggerError = useCallback((error: string) => {
    setError(error);
  }, []);

  const clearError = useCallback(() => {
    setError("");
  }, []);

  return { error, triggerError, clearError };
};

export default useErrorHandler;
