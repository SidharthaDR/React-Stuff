import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",

}) {

  return (
    <div>
        <div>
            <label htmlFor="" >
                {label}
            </label>
            <input 
            type="number"
            placeholder="Amount"
            disabled = {amountDisabled}
            value={amount}
            onChange=
            {
                (e) => onAmountChange && onAmountChange(Number(e.target.value))
            }
             />
        </div>

        <div>
            <p>Currency Type</p>
            <select name="" id=""
            value={selectedCurrency}
            onChange=
            {
                (e) => onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled = {currencyDisabled}
            >
                    {
                        currencyOptions.map((currency) => (
                            <option key = {currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }

            </select>
        </div>
      
    </div>

  );
}

export default InputBox;
