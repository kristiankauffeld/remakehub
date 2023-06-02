import productService, { Product } from '../services/ProductService';
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PRODUCTS } from '../constants';

const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: CACHE_KEY_PRODUCTS,
    queryFn: productService.getAll,
    staleTime: 1 * 60 * 1000 // 1 minute in milliseconds
  });

  /*useEffect(() => {
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
  }, []);*/
  //return { products, error, isLoading, setProducts, setError };
};

export default useProducts;
