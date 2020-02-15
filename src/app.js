import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill', amount: 1325, createdAt:1511201353214 }));
store.dispatch(addExpense({ description: 'Water bill', amount: 1450, createdAt:1515137895412 }));
store.dispatch(addExpense({ description: 'Electricity Bill', amount: 2755, createdAt: 1503612437891 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 325, createdAt: 1512347183781}));
store.dispatch(addExpense({ description: 'Grocery', amount: 2735, createdAt: 1512347184500}));
store.dispatch(setTextFilter(''));

// setTimeout(() =>{
//   store.dispatch(setTextFilter('cery'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
