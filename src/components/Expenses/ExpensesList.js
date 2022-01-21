import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpensesList.module.css";

function ExpensesList({ expenseItems }) {
  if (expenseItems.length === 0) {
    return (
      <h2 className={classes["expenses-list__fallback"]}>Found No Expense!</h2>
    );
  }

  return (
    <ul className={classes["expenses-list"]}>
      {expenseItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
