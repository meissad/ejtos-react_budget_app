import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currencies = () => {
    const { currency,dispatch } = useContext(AppContext);
    //const [curr, setCurr] = useState(currency);
    const currencyHandler = (event) => {
        let curr = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr.charAt(0),
        });
    }
    return(
        <div> 
            <select style={{ height: '3.7rem', backgroundColor: 'gold', borderRadius: '5px', width: '10rem'}} onChange={currencyHandler}>
                <option defaultValue="£" name="pound">£ Pound</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currencies;