import React from 'react';

const Photos = (props) => (
  <div
  className='review-tile-photos review-tile-element'>
    {props.photoList.map(val => {
      return (<span key={'photo-' + val}>Photo {val.id} </span>)
    })}
  </div>
);

export default Photos;