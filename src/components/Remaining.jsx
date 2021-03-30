import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalOfExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType = totalOfExpenses > budget ? "alert-danger" : "alert-success";
  console.log(totalOfExpenses);
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: {budget - totalOfExpenses}€</span>
    </div>
  );
};

export default Remaining;
