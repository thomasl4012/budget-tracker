import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
const Expense = () => {
  const { expenses } = useContext(AppContext);

  const [expensesFiltered, setexpensesFiltered] = useState(expenses || []);

  useEffect(() => {
    setexpensesFiltered(expenses);
  }, [expenses]);

  const handleChange = (e) => {
    const value = e.target.value;
    const search = expenses.filter((elmt) =>
      elmt.name.toLowerCase().includes(value.toLowerCase())
    );
    setexpensesFiltered(search);
  };

  return (
    <div>
      <input
        className="form-control mb-3 mr-sm-3"
        type="Search"
        placeholder="Search expenses"
        onChange={handleChange}
      ></input>

      <ul className="list-group">
        {expensesFiltered.map(({ id, name, cost }) => (
          <ExpenseItem key={id} id={id} name={name} cost={cost} />
        ))}
      </ul>
    </div>
  );
};

export default Expense;
