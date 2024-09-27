import { useState, useEffect } from 'react';
import { fetchProductsInCategory } from '../utils/api';

export const useProductsInCategory = (categoryId: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProductsInCategory(categoryId);
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      loadProducts();
    }
  }, [categoryId]);

  return { products, loading, error };
};