import React from "react";
import MedDetails from "./MedDetails";

const ListMedicines = (props) => {
  //   const medicines = props.meds.map((med) => <li>{med.name}</li>);
  const meds = props.meds;
  const medicine = meds.map((med) => (
    <MedDetails key={med.medName} med={med} />
  ));
  return (
    <>
      {meds.length > 0 && (
        <ul>
          <h1>Medicines:</h1>
          {medicine}
        </ul>
      )}
    </>
  );
};

export default ListMedicines;
