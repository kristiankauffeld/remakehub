import productService, { Product } from '../services/ProductService';
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PRODUCTS } from '../constants';

const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: CACHE_KEY_PRODUCTS,
    queryFn: productService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  });
};

export default useProducts;
