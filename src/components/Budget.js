import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch} = useContext(AppContext);
    const handleBudgetChange = (event) => {
        
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        
        console.log(totalExpenses);
        if(event.target.value>20000){
            alert("Budget is exceeding 20,000  £");
            // return;
        }
        if(event.target.value<totalExpenses){
            alert("You cannot reduce the budget lower than the spending");
            // return;
        }else{

            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;