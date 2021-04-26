import React from 'react';
import QuantityForm from './QuantityForm.jsx'

const SelectionForm = ({ style, handleSize, size, countChange, addToCart }) => (
  <form className="size_quantity_form">
    <select className="select-size" onChange={handleSize}>
      <option value="none-selected">- Select Size -</option>
      {
        Object.keys(style).map((sku) => {
          return <option key={sku} value={sku}>{style[sku].size}</option>
        })
      }
    </select>
    <QuantityForm style={style} size={size} countChange={countChange}/>
    <br></br>
    <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
  </form>
)

export default SelectionForm;