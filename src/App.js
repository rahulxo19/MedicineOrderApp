import React, { useState } from "react";
import MedicineForm from "./components/MedicineForm";
import ListMedicines from "./components/ListMedicines";
import ItemProvider from "./Store/ItemProvider";
import CartProvider from "./Store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [medicines, setMedicines] = useState([]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addMedicines = (med) => {
    setMedicines((prevData) =>
      prevData.length === 0 ? [med] : [...prevData, med]
    );
  };

  return (
    <ItemProvider>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <MedicineForm addMedicines={addMedicines} />
        <ListMedicines meds={medicines} />
      </CartProvider>
    </ItemProvider>
  );
}

export default App;
