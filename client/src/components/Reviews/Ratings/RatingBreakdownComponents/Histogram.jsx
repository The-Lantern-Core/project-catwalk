import React from 'react';
import HistogramEntry from './HistogramEntry.jsx';

class Histogram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingsFull: [0,0,0,0,0],
      total: 0
    };
  }

  componentDidMount() {
    if (this.props.ratings !== null) {
      var newRatingsFull = this.state.ratingsFull;
      var total = 0;
      for (var key in this.props.ratings) {
        newRatingsFull[5 - (parseInt(key))] = parseInt(this.props.ratings[key])
        total += parseInt(this.props.ratings[key])
      }

      this.setState({
        ratingsFull: newRatingsFull,
        total: total
      })
    }
  }

  render() {

    if (this.state.ratingsFull) {
      return (<div>
      {this.state.ratingsFull.map((rating, i) => {
        return (<HistogramEntry
          order = {i}
          key={'histogram-entry-' + i}
          total={this.state.total}
          rating={rating}
          toggleFilter = {this.props.toggleFilter}/>);
      })}
      </div>);
    } else {
      return (<div>NO DATA</div>)
    }

  }
}

export default Histogram;