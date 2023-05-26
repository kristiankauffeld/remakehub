import { useEffect, useState } from 'react';
import productService, { Product } from '../services/ProductService';

const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { request, cancel } = productService.getById<Product>(id);
    //console.log(request);

    request
      .then((data) => {
        //console.log(data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error && error.name === 'AbortError') return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);
  return { product, error, isLoading, setProduct, setError };
};

export default useProduct;
