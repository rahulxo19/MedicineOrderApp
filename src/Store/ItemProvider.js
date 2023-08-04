import React, { useReducer } from "react";
import QuantityContext from "./quantity-context";

const defaultQuantity = {
  meds: [],
};

const quantityReducer = (state, action) => {
  if (action.type === "ADD") {
    const medIndex = state.meds.findIndex(
      (med) => med.medName === action.medName
    );

    const med = state.meds[medIndex];
    let updatedMeds;

    if (med) {
      const updatedMed = {
        ...med,
        quantity: Number(med.quantity) + Number(action.quantity),
      };
      updatedMeds = [...state.meds];
      updatedMeds[medIndex] = updatedMed;
    } else {
      updatedMeds = [...state.meds];
      updatedMeds.push({ medName: action.medName, quantity: action.quantity });
    }

    return {
      meds: updatedMeds,
    };
  }
  if (action.type === "REMOVE") {
    const medIndex = state.meds.findIndex(
      (med) => med.medName === action.medName
    );

    const med = state.meds[medIndex];
    let updatedMeds;

    if (med) {
      const updatedMed = {
        ...med,
        quantity: Number(med.quantity) - Number(action.quantity),
      };
      updatedMeds = [...state.meds];
      updatedMeds[medIndex] = updatedMed;
    }
    if (med.quantity === 0) {
      updatedMeds.splice(medIndex, 1);
    }
    return {
      meds: updatedMeds,
    };
  }
};

const ItemProvider = (props) => {
  const [quantity, dispatchQuantity] = useReducer(
    quantityReducer,
    defaultQuantity
  );

  const addQuantityHandler = (medName, quantity) => {
    dispatchQuantity({ type: "ADD", medName, quantity });
  };

  const removeQuantityHandler = (medName, quantity) => {
    dispatchQuantity({ type: "REMOVE", medName, quantity });
  };

  const quantityContext = {
    ...quantity,
    addQuantity: addQuantityHandler,
    removeQuantity: removeQuantityHandler,
  };

  return (
    <QuantityContext.Provider value={quantityContext}>
      {props.children}
    </QuantityContext.Provider>
  );
};

export default ItemProvider;
