import React, { useState } from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const selectHandler = selectedYear => {
    setYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === year;
  })

    return (
      <Card className="expenses">
      <ExpensesFilter selected={year} saveSelectedYear={selectHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense._id} expense={expense} />
      ))}
      
      </Card>
    );
  }
  export default Expenses;