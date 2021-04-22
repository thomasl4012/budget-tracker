import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);

  const handleChange = () => {
    const value = prompt("Do you want to edit your budget ?");
    if (value != null) {
      dispatch({
        type: "EDIT",
        payload: value,
      });
    }
  };
  return (
    <div className="alert alert-secondary">
      <div className="mb-2"> Budget : {budget}€</div>
      <div className="btn btn-primary" onClick={handleChange}>
        {" "}
        Edit
      </div>
    </div>
  );
};

export default Budget;
