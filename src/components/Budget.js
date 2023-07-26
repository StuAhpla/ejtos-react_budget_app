import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import ExpenseTotal from './ExpenseTotal';
//Task 2: Editable budget value
const Budget = () => {
    const { dispatch, budget, currency, remaining } = useContext(AppContext);

    const setBudget = (val)=>{

        if (val > 20000) {
            alert("The budget can not exceed 20,000.")
            val = 20000
        }
        else if (val < remaining) {
            alert("The budget can not go lower than the expenses.")
            val = remaining + 10
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}   
                <input 
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ width: 80 , size: 10}}
                    step="10"
                    onChange={(event) => setBudget(event.target.value)}
                    >
                    </input>
            </span>
        </div>
    );
};
export default Budget;