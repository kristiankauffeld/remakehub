import { useEffect, useState } from 'react';
import productService, { Product } from '../services/ProductService';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { request, cancel } = productService.getAll<Product>();
    //console.log(request);

    request
      .then((data) => {
        //console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error && error.name === 'AbortError') return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);
  return { products, error, isLoading, setProducts, setError };
};

export default useProducts;
