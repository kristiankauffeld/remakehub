import React, { Dispatch } from "react";
import { CartAction, CartItem } from "../components/Cart";


interface CartContextType {
  //cartState:
  cartItems: CartItem[]; 
  dispatch: Dispatch<CartAction>;
}

const CartContext = React.createContext<CartContextType>({} as CartContextType);

export default CartContext;
