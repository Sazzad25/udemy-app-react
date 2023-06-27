import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense';

const DummyData = [
  {
    _id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { _id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    _id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    _id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
 
const [expenses, setExpenses] = useState(DummyData);
  // return React.createElement(
  //   'div',
  //    {},
  // React.createElement('h2', {}, "Sazzad Udemy React Project"),
  // React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
  });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
       items={expenses}
      />
    </div>
  );
}

export default App;
