import Expenses from "./components/Expenses";


function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Sazzad's React Assignment 01!</h2>
      <Expenses
       expenses={expenses}
      />
    </div>
  );
}

export default App;
