import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-success'> 
            <label for="Currency"></label> 
            {
                <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                    <option value="£">£ Pound</option>
                    <option value="₹">₹ Ruppee</option>
                    <option value="€">€ Euro</option>
                    <option value="$">$ Dollar</option>
                </select>
            }	

            {/*<div class="dropdown">
                <button class="dropbtn">Currency ({currency})</button>
                <div class="dropdown-content" onChange={event=>changeCurrency(event.target.value)}>
                <a value="£">£ Pound</a>
                <a value="₹">₹ Ruppee</a>
                <a value="€">€ Euro</a>
                <a value="$">$ Dollar</a>
                </div>
            </div> */}	
    </div>
    );
};
export default Currency;