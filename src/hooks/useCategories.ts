import { useState, useEffect } from 'react';
import { fetchCategories } from '../utils/api';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const data = await fetchCategories();
        setCategories(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};