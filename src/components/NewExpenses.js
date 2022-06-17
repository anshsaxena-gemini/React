import React from 'react'
import ExpensesFilter from './ExpensesFilter'

function NewExpenses() {
const yearChangeFilter = (selectedYear) =>{
   console.log(selectedYear);
}
  return (
    <div>
   <ExpensesFilter onChangeYear={yearChangeFilter} />
  
    </div>
  )
}

export default NewExpenses