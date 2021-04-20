import React from 'react';

const Price = ({ standard, sale }) => {
  if (!sale) {
    return (<div className="standard-price">{standard}</div>)
  } else {
    return (
    <div className="price">
      <div className="old-price"><s>{standard}</s><span className="new-price"> {sale}</span></div>
    </div>
    )
  }
}

export default Price;