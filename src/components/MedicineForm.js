/* eslint-disable no-restricted-globals */
import React, { useContext } from "react";
import { useState } from "react";
import classes from "./MedicineForm.module.css";
import QuantityContext from "../Store/quantity-context";

const MedicineForm = (props) => {
  const quantityCtx = useContext(QuantityContext);
  const [medicineForm, setMedicineForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      medicineForm.name.length === 0 ||
      medicineForm.description.length === 0 ||
      medicineForm.price === 0 ||
      medicineForm.quantity === 0
    ) {
      alert("please fill the form before submitting");
      return;
    }

    if (
      quantityCtx.meds.filter((med) => med.medName === medicineForm.name).length
    ) {
      quantityCtx.addQuantity(medicineForm.name, medicineForm.quantity);
      return;
    }

    quantityCtx.addQuantity(medicineForm.name, medicineForm.quantity);
    props.addMedicines(medicineForm);

    setMedicineForm({
      name: "",
      description: "",
      price: "",
      quantity: "",
    });
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;

    setMedicineForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={medicineForm.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={medicineForm.description}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={medicineForm.price}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={medicineForm.quantity}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicineForm;
