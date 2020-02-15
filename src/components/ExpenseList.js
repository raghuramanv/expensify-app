import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>    
    {
      props.expenses.map((expense, index) => (
        <ExpenseListItem key={expense.id} count={index + 1} {...expense} />
      ))
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: filterExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);