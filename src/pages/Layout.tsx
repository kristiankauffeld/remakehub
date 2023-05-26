import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useReducer } from 'react';
import CartContext from '../contexts/cartContext';
import { CartItem, cartReducer } from '../components/Cart';
import Background from './Background';
import Footer from '../components/Footer';

//for test purposes
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    description: '...',
    price: 'price_1N3jt7DHj3epHvXatxvqh0tS',
    amount: 90.0,
    imageUrl:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    description: '...',
    price: 'price_1N3jt7DHj3epHvXatxvqh0tS',
    amount: 32.0,
    imageUrl:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    quantity: 1,
  },
  // Add more items as needed
];

export default function Layout() {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      <Navbar />
      <Outlet />
      <Footer/>
    </CartContext.Provider>
  );
}
