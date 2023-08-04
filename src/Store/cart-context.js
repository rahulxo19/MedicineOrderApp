import react from "react";

const CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (name) => {},
});

export default CartContext;
