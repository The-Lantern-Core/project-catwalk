import React from 'react';
import CharacteristicsEntry from './CharacteristicsEntry.jsx';

const formatSize = (size) => {
  if (size) {
    return (<CharacteristicsEntry key={'characteristic-entry-size'}
    char = {'Size'}
    value = {size.value}
    minScale={'Too small'}
    maxScale={'Too large'}/>);
  }
}

const formatWidth = (width) => {
  if (width) {
    return (<CharacteristicsEntry key={'characteristic-entry-width'}
    char = {'Width'}
    value = {width.value}
    minScale={'Too small'}
    maxScale={'Too large'}/>);
  }
}

const formatComfort = (comfort) => {
  if (comfort) {
    return (<CharacteristicsEntry key={'characteristic-entry-comfort'}
    char = {'Comfort'}
    value = {comfort.value}
    minScale={'Poor'}
    maxScale={'Perfect'}/>);
  }
}

const formatQuality = (quality) => {
  if (quality) {
    return (<CharacteristicsEntry key={'characteristic-entry-quality'}
    char = {'Quality'}
    value = {quality.value}
    minScale={'Poor'}
    maxScale={'Perfect'}/>);
  }
}

const formatLength = (length) => {
  if (length) {
    return (<CharacteristicsEntry key={'characteristic-entry-length'}
    char = {'Length'}
    value = {length.value}
    minScale={'Too small'}
    maxScale={'Too large'}/>);
  }
}

const formatFit = (fit) => {
  if (fit) {
    return (<CharacteristicsEntry key={'characteristic-entry-fit'}
    char = {'Fit'}
    value = {fit.value}
    minScale={'Too small'}
    maxScale={'Too large'}/>);
  }
}

const Characteristics = (props) => (
  <div>
    <b>Characteristics</b>
      {formatSize(props.charList['Size'])}
      {formatWidth(props.charList['Width'])}
      {formatLength(props.charList['Length'])}
      {formatFit(props.charList['Fit'])}
      {formatComfort(props.charList['Comfort'])}
      {formatQuality(props.charList['Quality'])}
  </div>
);

export default Characteristics;