import { useState, useCallback } from 'react';

export const useApi = (apiFunc: any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (...args : any) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      setData(result);
      return result;
    } catch (err: any) {
      setError(err.response?.data?.message || 'An unexpected error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  return {
    data,
    error,
    loading,
    request
  };
};