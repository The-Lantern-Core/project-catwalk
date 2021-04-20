import React from 'react';

const Arrow = ({direction, handleArrowClick, arrow}) => {
  return (
    <button
      className={`slide-arrow ${direction}`}
      name={direction}
      onClick={handleArrowClick}>
        {arrow}
    </button>
  )
}

export default Arrow;