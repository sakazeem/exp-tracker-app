import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
//import { AddTransaction, Balance, Header, IncomeExpenses, Transaction, TransactionList } from './components/index.js';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
