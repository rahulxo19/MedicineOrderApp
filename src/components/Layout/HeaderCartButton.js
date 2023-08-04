import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      <span></span>
    </button>
  );
}

export default HeaderCartButton;
