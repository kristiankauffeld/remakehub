import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useReducer } from 'react';
import CartContext from '../contexts/cartContext';
import { cartReducer } from '../components/Cart';

export default function Layout() {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      <Navbar />
      <Outlet />
    </CartContext.Provider>
  );
}
