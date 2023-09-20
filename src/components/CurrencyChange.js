import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = () => {

    


    const { dispatch } = useContext(AppContext);

    const handleCurrencyExchange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    return (
        <div  >   
          <select className="custom-select" id="inputGroupSelect01"onClick={(e) => { handleCurrencyExchange(e.target.value) }}>
            <option defaultValue>Choose Currency</option>
            <option value="$" name="dollar">Currency ($ Dollar)</option>
            <option value="£" name="pound">Currency (£ Pound) </option>
            <option value="€" name="euro">Currency (€ Euro)</option>
            <option value="₹" name="ruppee">Currency (₹ Ruppee) </option>

          </select>  
        </div>
    )
}

export default CurrencyChange;