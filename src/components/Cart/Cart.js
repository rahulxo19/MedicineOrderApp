import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import QuantityContext from "../../Store/quantity-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityCtx = useContext(QuantityContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (name) => {
    quantityCtx.addQuantity(name, 1);
    cartCtx.removeItem(name);
  };

  const cartItemAddHandler = (item) => {
    quantityCtx.removeQuantity(item.name, 1);
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.name}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.name)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
