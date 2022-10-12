import './ExpenseForm.css'
import React, { useState } from 'react'

const ExpenseForm = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleChangeHandler = (event) =>{
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })
    };

    const amountChangeHandler = (event) =>{
        setUserInput((prevState) =>{
            return {...prevState, enteredAmount: event.target.value}
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: new Date(event.target.value)}
        })
    }

    const submitHandler = (event) => {

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: userInput.enteredDate,
        }

        props.onSaveExpenseData(expenseData)

        setUserInput({
            enteredTitle:'',
            enteredAmount: '',
            enteredDate: '',
        })

        event.preventDefault();
    };


    return <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input onChange={titleChangeHandler} type="text" value={userInput.enteredTitle}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" value={userInput.enteredAmount}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input onChange={dateChangeHandler} type="date" min="2022-10-05" max="2024-12-31" value={userInput.enteredDate}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
}

export default ExpenseForm;