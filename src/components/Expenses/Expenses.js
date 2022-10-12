import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) =>{
    const [expensesDate, setExpensesDate] = useState('2020')

    const yearData = (date) => {
        setExpensesDate(date)
    }

    const filteredExpenses = (props.items.filter(item =>item.date.getFullYear() === parseInt(expensesDate, 10)))



    return(
        <Card className="expenses">
            <ExpensesFilter selected={expensesDate} onYearChange={yearData}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;





// import './Expenses.css';
// import Card from '../UI/Card';
// import ExpenseItem from "./ExpenseItem";
// import ExpensesFilter from './ExpensesFilter';
// import React, { useEffect, useState } from 'react';

// const Expenses = (props) =>{
//     const [expensesDate, setExpensesDate] = useState('2020')
//     const [filteredByYearData, setFilteredByYearData] = useState(props.items)


//     useEffect(() => {
//         setFilteredByYearData(refresh(props.items, expensesDate))
//     }, []);

//     const refresh = (array, datee) =>{ 
//         return array.filter(item => item.date.getFullYear() === parseInt(datee, 10))
//     }

//     const yearData = (date) => {
//         setExpensesDate(date)
//         setFilteredByYearData(refresh(props.items, date))
//     }

//     const allExpenses = filteredByYearData.map(data => {
//         return <ExpenseItem
//             key={data.id}
//             title={data.title}
//             amount={data.amount}
//             date={data.date} 
//         />
//       })


//     return(
//         <Card className="expenses">
//             <ExpensesFilter selected={expensesDate} onYearChange={yearData}/>
//             {allExpenses}
//         </Card>
//     )
// }

// export default Expenses;