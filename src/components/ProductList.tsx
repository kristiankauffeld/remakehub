import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ProductList = () => {
  const { products } = useProducts();

  return (
    <>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8'>
        {products.map((product) => (
          <Link to={'/products/' + product.id} key={product.id}>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
              <img
                src={product.imageUrl}
                alt={product.imageAlt}
                className='h-full w-full object-cover object-center group-hover:opacity-75'
              />
            </div>
            <div className='text-center'>
              <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                ${product.amount}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
