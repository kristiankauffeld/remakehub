import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import CartContext from '../contexts/cartContext';
import { useContext } from 'react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  const { data: product, error } = useProduct(productId);
  const { cartItems, dispatch } = useContext(CartContext);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className='pt-20'>
        {/* Image */}
        <div className='mx-auto max-w-xs lg:max-w-md'>
          <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
            <img
              src={product?.imageUrl}
              alt={product?.imageUrl}
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-4 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-4'>
          <h1 className='text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
            {product?.name}
          </h1>

          <div className='text-center mt-4 lg:row-span-3'>
            <h2 className='sr-only'>Product information</h2>

            <p className='text-3xl tracking-tight text-gray-900'>
              ${product?.amount}
            </p>
            {/* Add Button */}
            <form className='mt-5'>
              <button
                type='submit'
                className='mt-2 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={(event) => {
                  event.preventDefault();
                  const itemExists = cartItems.some(
                    (item) => item.id === product?.id
                  );
                  if (!itemExists) {
                    dispatch({
                      type: 'ADD_ITEM',
                      item: {
                        id: product?.id ?? 0,
                        name: product?.name ?? '',
                        description: product?.description ?? '',
                        price: product?.price ?? '',
                        amount: product?.amount ?? 0,
                        imageUrl: product?.imageUrl ?? '',
                        imageAlt: product?.imageAlt ?? '',
                        quantity: 1,
                      },
                    });
                  } else {
                    alert('Product already exists in the cart');
                  }
                }}
              >
                Add to cart
              </button>
            </form>
          </div>
          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
