import ProductList from '../components/ProductList';

export default function ProductListPage() {
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
