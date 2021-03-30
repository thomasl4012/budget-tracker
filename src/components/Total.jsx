import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Total = () => {
  const { expenses } = useContext(AppContext);
  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far : {total}€</span>
    </div>
  );
};

export default Total;
