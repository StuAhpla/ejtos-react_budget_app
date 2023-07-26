import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import Currency from './Currency';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    //const [budget, setBudget] = useState('');

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}   
                <input 
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ width: 80 , size: 10}}
                    //onChange={(event) => setBudget(event.target.value)}
                    >
                    </input>
            </span>
        </div>
    );
};
export default Budget;