import React from 'react';
import CharacteristicsEntry from './CharacteristicsEntry.jsx';

const Characteristics = (props) => (
  <div>
    <b>Characteristics</b>
    {props.charList.map((val) => {
      return (<CharacteristicsEntry char = {val} key={'characteristic-entry-' + val}/>);
      })
    }
  </div>
);

export default Characteristics;