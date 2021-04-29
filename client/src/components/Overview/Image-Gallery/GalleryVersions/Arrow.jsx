import React from 'react';

const Arrow = ({direction, handleArrowClick}) => {
  return (
    <div>

      <i id={direction}
         className={`fas fa-arrow-${direction} fa-2x`}
         name={direction}></i>
         <button
        className={`slide-arrow ${direction}`}
        name={direction}
        onClick={handleArrowClick}>
      </button>
    </div>
  )
}

export default Arrow;