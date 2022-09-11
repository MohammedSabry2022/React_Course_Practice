/* Expenses.js */
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");
  const onYearChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpenses = props.items.filter((checkedItem) => {
    return checkedItem.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onYearChange={onYearChangeHandler}
        />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
