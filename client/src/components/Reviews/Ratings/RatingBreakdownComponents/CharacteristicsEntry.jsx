import React from 'react';

const CharacteristicsEntry = (props) => (
  <div
    className='characteristic-entry'
    style={{
      'marginTop': '30px',
      'marginBottom': '2px'
    }}>
    {props.char} <br/>

    {/* METER ICON*/}
    <div
    style={{
      'position': 'absolute',
      'width': '22.2222%'
    }}>
      <div
      style={{
      'paddingLeft': ((props.value / 5) * 100) + '%',
      'marginLeft': '-8px'
      }}>▼</div>
    </div>

    {/* GRAY METER BOXES */}
    <div
    className='characteristic-entry-meter'
    style={{
      'display': 'grid',
      'gridTemplateColumns': Array(props.gridSize).fill('1fr').join(' '),
      'columnGap': '3px'
    }}>
      <div className='characteristic-entry-meter-background'>&nbsp;</div>
      <div className='characteristic-entry-meter-background'>&nbsp;</div>
      <div className='characteristic-entry-meter-background'>&nbsp;</div>
      {props.gridSize === 4 ?<div className='characteristic-entry-meter-background'>&nbsp;</div>: ''}
    </div>

    {/* METER LABELS */}
    <div
    style={{
      'display': 'grid',
      'gridTemplateColumns': '1fr 1fr 1fr',
      'marginTop': '7px',
      'fontSize': '90%',
      'color': '#666666'
    }}>
      <div style={{'justifySelf': 'start'}}>{props.minScale}</div>
      <div style={{'justifySelf': 'center'}}>{props.midScale}</div>
      <div style={{'justifySelf': 'end'}}>{props.maxScale}</div>
    </div>

  </div>
);

export default CharacteristicsEntry;