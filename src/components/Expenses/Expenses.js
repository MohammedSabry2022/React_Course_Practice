/* Expenses.js */
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
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
        <ExpensesChart expenses={filterdExpenses} />

        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
