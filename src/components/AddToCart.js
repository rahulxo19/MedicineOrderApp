import React, { useState, useContext, useRef } from "react";
import Input from "./Input";
import classes from "./AddToCart.module.css";
import QuantityContext from "../Store/quantity-context";

const AddToCart = (props) => {
  const quantityCtx = useContext(QuantityContext);
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const med = quantityCtx.meds.filter((med) => med.medName === props.medName);
    const totalAmount = med[0].quantity;

    if (Number(enteredAmount) > Number(totalAmount)) {
      setAmountIsValid(false);
    } else {
      setAmountIsValid(true);
      quantityCtx.removeQuantity(props.medName, enteredAmount);
      props.addToCart(enteredAmount);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add to Cart</button>
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default AddToCart;
