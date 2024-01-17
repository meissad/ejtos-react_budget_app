import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currencies = () => {
    const { currency } = useContext(AppContext);

    const [curr, setCurr] = useState(currency[1]);
    return(
        <div>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurr(event.target.value)}>
                <option defaultValue>Currency({curr} Pound)</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currencies;