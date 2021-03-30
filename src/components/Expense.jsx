import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
const Expense = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div>
      <ul className="list-group">
        {expenses.map(({ id, name, cost }) => (
          <ExpenseItem id={id} name={name} cost={cost} />
        ))}
      </ul>
    </div>
  );
};

export default Expense;
