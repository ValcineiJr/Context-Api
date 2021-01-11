import React, { createContext, useState, useContext } from "react";

const CartContext = createContext({
  openCart: Boolean,
  cart: Array,
  setCart: Function,
  setOpenCart: Function,
  total: Number,
  setTotal: Function,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        openCart,
        setOpenCart,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
