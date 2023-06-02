import { GoeeyBallsTwo } from 'react-svg-spinners';
import ProductList from '../components/ProductList';
import useProducts from '../hooks/useProducts';

export default function ProductListPage() {
  const { error, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className='flex justify-center pt-80'>
        <GoeeyBallsTwo width={50} height={100} dur={0.8} />
      </div>
    );
  }

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/*PRODUCT LIST */}
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>
        <ProductList />
      </div>
    </>
  );
}
