import React from 'react';

const CharacteristicsEntry = (props) => (
  <div>
    {props.char} <br/>
    {props.value} <br/>
    {props.minScale} {props.maxScale}
  </div>
);

export default CharacteristicsEntry;