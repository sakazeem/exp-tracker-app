import React from 'react';
import { AddTransaction, Balance, Header, IncomeExpenses, Transaction, TransactionList } from './components/index.js';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      Hello World
      <Header />
      <IncomeExpenses />
      <TransactionList />
      <Balance />
      <AddTransaction />
      <Transaction />
    </div>
  );
}

export default App;
