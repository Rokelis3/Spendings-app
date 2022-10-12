import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [expenseFormOpenClose, setExpenseFormOpenClose] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveAppHandler(expenseData)
    }

    const openExpenseForm = () => {
        setExpenseFormOpenClose(true)
    }

    const cancelEdit = () => {
        setExpenseFormOpenClose(false)
    }

return <div className="new-expense">
           {expenseFormOpenClose && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEdit}/>}
           {!expenseFormOpenClose && <button onClick={openExpenseForm}>Add Expense</button>}
        </div>
}

export default NewExpense;