import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if( event.target.value < totalExpenses ){
            setNewBudget(totalExpenses)
            alert("You can not reduce the budget value lower than the spending");
        }else if( event.target.value > 20000 ){
            setNewBudget(20000)
            alert("The value cannot exceed remaining funds £20000");
        }else{
            setNewBudget(event.target.value)
        }
    }
    return (
<div className='alert alert-secondary'>
Budget: {currency}
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;