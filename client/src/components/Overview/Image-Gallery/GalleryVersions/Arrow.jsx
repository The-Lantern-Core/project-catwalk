import React from 'react';

const Arrow = ({direction, handleArrowClick}) => {
  return (
    <div>
      <i id={direction}
         src="arrow2.png"
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