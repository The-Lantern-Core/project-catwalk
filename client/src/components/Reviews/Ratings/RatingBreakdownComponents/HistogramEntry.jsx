import React from 'react';

const HistogramEntry = (props) => (
  <div
    className='rating-histogram-entry'
    style={{
      'display': 'grid',
      'gridTemplateColumns': `60px ${props.rating}fr ${(props.total || 1) - props.rating}fr`,
      'marginBottom': '20px'
    }}>
    <div><u>{5 - props.order} stars</u></div>
    <div
    style={{
      'backgroundColor': '#90b886',
      'height': '9px',
      'marginTop' : '7px'
    }}></div>
    <div
    style={{
      'backgroundColor': '#ededed',
      'height': '9px',
      'marginTop' : '7px'
    }}></div>
  </div>
);


export default HistogramEntry;