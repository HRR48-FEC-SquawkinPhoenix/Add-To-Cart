import React from 'react';
import './select.css';



var Select = ({keyGenerator, sizes, sizeSwitcher, quantity}) => {


  return (
    <div>
        {/* first Select bar */}
       <label>
          Size
          <br />
          <select>
            <option>Select Size</option>
            {sizes.map(size =>
            <option
            onClick={sizeSwitcher}
            key={keyGenerator()}>
              {size}
            </option>
            )}
          </select>
        </label>
        {/* second Select bar */}
        <label>
          Quantity
          <br />
          <select>
            {quantity.map(number =>
            <option key={keyGenerator()}>
              {number}
            </option>
            )}
          </select>
        </label>

    </div>
  )
}


export default Select;