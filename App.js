import React, { useEffect, useState } from 'react'; 

import NewOrder from './components/NewOrder';
import logo from './logo.svg';

import ItemList from './components/ItemList';
import './App.css';
const table1 = [
  {
    id: 1,
    price: 100,
    dish: 'Noodles',
    table: 'table1'
  }
]

const table2 = [
    {
      id: 1,
      price: 100,
      dish: 'Keema',
      table: 'table2'
    }
]

const table3 = [
  {
    id: 1,
    price: 100,
    dish: 'Rasgulla',
    table: 'table3'
  }
]

const getLocaleStoredOrder = () =>{
  let orders = localStorage.getItem('orders');
  console.log(orders);
  if(orders) {
    return JSON.parse(localStorage.getItem('orders'));
  }
}

function App() {
  const[orders1, setOrders1] = useState(table1);
  const[orders2, setOrders2] = useState(table2);
  const[orders3, setOrders3] = useState(table3);
  
  

  

  
  const addOrderHandler = (order) => {
    if(order.table ==='Table1')
    {
      setOrders1((prevOrder1) => {
        return [order, ...prevOrder1];
      });
    }
    else if(order.table==='Table2') 
    {
      setOrders2((prevOrder2) => {
        return [order, ...prevOrder2];
      });
    }

    else if(order.table==='Table3') 
    {
      setOrders3((prevOrder3) => {
        return [order, ...prevOrder3];
      });
    }

    
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewOrder onAddOrder={addOrderHandler}/>
        <p>Table1</p>
        <ItemList items={orders1}/>
        <p>Table2</p>
        <ItemList items={orders2}/>
        <p>Table3</p>
        <ItemList items={orders3}/>
      </header>
    </div>
  );
}

export default App;
