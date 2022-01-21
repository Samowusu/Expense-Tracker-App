import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelNewExpenseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes["new-expense"]}>
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add a new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={cancelNewExpenseHandler}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
