import React from 'react';

const Photos = (props) => (
  <div
  className='review-tile-photos review-tile-element'>
    {props.photoList.map(val => {
      return (<img key={'photo-' + val.id} src={val.url}
      style={{
        'height': '50px',
        'width': '50px',
        'marginRight': '4px',
        'border': '1px solid #ddd',
        'padding': '3px',
        'borderRadius': '2px'
      }}></img>)
    })}
  </div>
);

export default Photos;