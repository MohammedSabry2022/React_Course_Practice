import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enterdTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enterdAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2022-12-31"
              value={enterdDate}
              onChange={dateChangeHandler}
            ></input>
          </div>

          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
