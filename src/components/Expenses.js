import React, { useState } from 'react';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
      <ExpensesList items={filteredExpenses} />
      </Card>
    );
  }
  export default Expenses;