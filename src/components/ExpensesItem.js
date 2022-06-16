import React from 'react'
import Expenses from './Expenses'

function ExpensesItem() {

    const expenses = [
        {
            id : '1',
            title : 'FaceWash',
            amount : 90,
            date : '12-2-22'
        },
        {
            id : '2',
            title : 'Soap',
            amount : 100,
            date : '22-2-22'
        },
        {
            id : '3',
            title : 'ColdDrink',
            amount : 29,
            date : '20-2-22'
        }
        ,
        {
            id : '4',
            title : 'Pasty',
            amount : 25,
            date : '2-2-22'
        },
    ];
  return (
    <div>

   <Expenses items={expenses} />

    </div>
  )
}

export default ExpensesItem