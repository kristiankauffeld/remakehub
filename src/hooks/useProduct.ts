import { useQuery } from '@tanstack/react-query';
import productService, { Product } from '../services/ProductService';
import { CACHE_KEY_PRODUCT } from '../constants';

const useProduct = (id: number) => {
  return useQuery<Product, Error>({
    queryKey: CACHE_KEY_PRODUCT(id),
    queryFn: () => productService.getById(id),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  });
};

export default useProduct;
