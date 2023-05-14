import { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  return (
    <>
      <h1>Product List</h1>
    </>
  );
};

export default ProductList;
