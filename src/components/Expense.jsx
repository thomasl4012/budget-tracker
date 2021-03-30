import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expense = () => {
  const expenses = [
    { id: 123, name: "Shopping", cost: 30 },
    { id: 123, name: "Test", cost: 30 },
    { id: 123, name: "Transportation", cost: 30 },
    { id: 123, name: "Rent", cost: 30 },
    { id: 123, name: "Shopping", cost: 30 },
    { id: 123, name: "Shopping", cost: 30 },
  ];
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
