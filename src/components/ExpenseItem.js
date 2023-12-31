import Card from './Card';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({expense}) => {
  const{date, title, amount} = expense;

  return (
    <li>
      <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;