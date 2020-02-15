import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, note, amount, createdAt}) => (
  <div>
    <h3>
      <Link to={`edit/${id}`}>{description}</Link>  
    </h3>
    <p>{amount} |  {createdAt} | {note} </p>
  </div>
);

export default ExpenseListItem;