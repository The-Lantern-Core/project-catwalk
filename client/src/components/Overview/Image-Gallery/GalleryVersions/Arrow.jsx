import React from 'react';

const Arrow = ({direction, handleArrowClick}) => {
  return (
      <img
        className={`slide-arrow ${direction}`}
        name={direction}
        onClick={handleArrowClick}
        style={{"backgroundImage": "url(arrow2.png)", "backgroundPosition": "center", "backgroundSize": "100% 100%"}}>
      </img>
  )
}

export default Arrow;