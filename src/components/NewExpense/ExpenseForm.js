import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enterdTitle, setEnteredTitle] = useState("");
  // const [enterdAmount, setEnteredAmount] = useState("");
  // const [enterdDate, setEnteredDate] = useState("");

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };
  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };
  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmount: "",
    enterdDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({ ...userInput, enterdTitle: event.target.value });
  };
  const amountChangeHandler = (event) => {
    setUserInput({ ...userInput, enterdAmount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setUserInput({ ...userInput, enterdDate: event.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
