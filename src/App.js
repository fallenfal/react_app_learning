import logo from './logo.svg';
import './App.css';
import './components/ExpenseItem'
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {title: 'Car Insurance',date: new Date(2023, 3, 28), amount: (Math.random()*1000).toFixed(2)},
    {title: 'Shopping',date: new Date(2023, 6, 22), amount: (Math.random()*1000).toFixed(2)},
    {title: 'Bills',date: new Date(2023, 9, 12), amount: (Math.random()*1000).toFixed(2)},
    {title: 'Drugs',date: new Date(2023, 12, 31), amount: (Math.random()*1000).toFixed(2)}
  ]


  return (
      <div>
        <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}></ExpenseItem>
      </div>

  );
}

export default App;
