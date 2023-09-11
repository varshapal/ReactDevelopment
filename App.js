import ExpenseItem from './components/Expenses/ExpenseItem';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'ABC Grocery Store'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'XYZ TV Showroom' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'XYZ Insurance Company'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Desk Showroom'
    },
  ];

  // const expenseItems = expenses.map(expense => 
  //   <li key={expense.id}>
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //     location={expense.location}
  //   </li>
  //   );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.  
        </p>
        
        <ExpenseItem data={expenses}></ExpenseItem>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
