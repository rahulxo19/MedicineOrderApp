import react from "react";

const QuantityContext = react.createContext({
  meds: [],
  addQuantity: (medName, quantity) => {},
  updateQuantity: (medName, quantity) => {},
});

export default QuantityContext;
