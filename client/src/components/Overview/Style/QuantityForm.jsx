import React from 'react';

const QuantityForm = ({ style, size, countChange }) => {
  if (!size || !style) {
    return <select></select>
  } else {
    var available = []
    for (var i = 1; i <= style[size].quantity; i++) {
      available.push(i)
    }
    return (
    <select onChange={countChange}>
      {
        available.map((num) => {
          return <option key={num} value={num}>{num}</option>
        })
      }
    </select>
    )


  }

}

export default QuantityForm;