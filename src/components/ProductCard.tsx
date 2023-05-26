import { Product } from '../services/ProductService';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <>
      <div className='group relative'>
        <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            className='h-full w-full object-cover object-center'
          />
        </div>
        <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
        <p className='mt-1 text-lg font-medium text-gray-900'>
          {product.amount}
        </p>
      </div>
    </>
  );
}
