import React from 'react';

const Photos = (props) => (
  <div>
    {props.photoList.map(val => {
      return (<span key={'photo-' + val}>Photo {val} </span>)
    })}
  </div>
);

export default Photos;