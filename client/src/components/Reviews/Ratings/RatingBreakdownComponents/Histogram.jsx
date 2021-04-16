import React from 'react';
import HistogramEntry from './HistogramEntry.jsx';

class Histogram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingsFull: Array(5).fill(0)
    };
  }

  render() {
    return (<div>
      <b>Histogram</b>
      {this.state.ratingsFull.map((_, i) => {
        return (<HistogramEntry order = {i} key={'histogram-entry-' + i}/>);
        })
      }
      </div>);
  }
}

export default Histogram;