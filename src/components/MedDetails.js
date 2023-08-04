import React, { useContext } from "react";
import AddToCart from "./AddToCart";
import classes from "./ListMedicine.module.css";
import QuantityContext from "../Store/quantity-context";
import CartContext from "../Store/cart-context";

const MedDetails = (props) => {
  const quantityCtx = useContext(QuantityContext);
  const cartContext = useContext(CartContext);
  const medDetail = quantityCtx.meds.filter(
    (med) => med.medName === props.med.name
  );

  const cartHandler = (med) => {
    console.log(med);
    console.log(props.med.price);
    cartContext.addItem({
      name: props.med.name,
      description: props.med.description,
      price: props.med.price,
      amount: Number(med),
    });
  };

  return (
    <li key={props.med.name} className={classes.meds}>
      <h2>{props.med.name}</h2>
      <div className={classes.description}>{props.med.description}</div>
      <div className={classes.price}>Price: {props.med.price}</div>
      <div className={classes.price}>Quantity: {medDetail[0].quantity}</div>
      <AddToCart medName={props.med.name} addToCart={cartHandler} />
    </li>
  );
};

export default MedDetails;
