import React from 'react';
import QuantityForm from './QuantityForm.jsx'

const SelectionForm = ({ style, handleSize, size }) => (
  <form>
    <select className="select-size" onChange={handleSize}>
      <option value="none-selected">- Select Size -</option>
      {
        Object.keys(style).map((sku) => {
          return <option key={sku} value={sku}>{style[sku].size}</option>
        })
      }
    </select>
    <QuantityForm style={style} size={size} />
  </form>
)

export default SelectionForm;