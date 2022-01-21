import React from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";

function ExpenseItem({ date, title, amount }) {
  return (
    <div className={classes["expense-item"]}>
      <ExpenseDate date={date} />
      <div className={classes["expense-item__description"]}>
        <h2>{title}</h2>
        <div className={classes["expense-item__price"]}>GHS{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
