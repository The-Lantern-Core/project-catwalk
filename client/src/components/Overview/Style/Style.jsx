import React from 'react';
import $ from 'jquery';
import { Token } from '../../../../../config.js';
import SelectionThumbnail from './SelectionThumbnail.jsx';
import SelectionForm from './SelectionForm.jsx';



class Style extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStyle: null,
      styles: null,
      size: null,
      count: null
    }
    this.handleSize = this.handleSize.bind(this);
    this.clearSize = this.clearSize.bind(this);
    this.countChange = this.countChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.props.getDefaultStyle(this.props.styles)
    this.setState({styles: this.props.styles})
  }

  componentDidUpdate(oldProps) {
    if (this.props.currentStyle !== oldProps.currentStyle) {
      this.setState({currentStyle: this.props.currentStyle});
    }
  }

  handleSize(e) {
    e.preventDefault()
    if (e.target.value === "none-selected") {
      this.setState({size: null})
    } else {
      this.setState({size: e.target.value})
      $(".select-size").attr("size", "1")
    }
  }

  clearSize(e) {
    e.preventDefault()
    this.setState({size: null})
    this.props.onThumbnailClick(e.target.alt)
  }

  countChange(e) {
    e.preventDefault()
    this.setState({count: e.target.value})
  }

  addToCart(e) {
    e.preventDefault()
    if (!this.state.size) {
      var len = Object.keys(this.state.currentStyle.skus).length
      $(".select-size").attr("size", len)
    } else {
      $.post({
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart',
        headers: { Authorization: Token },
        body: {sku_id: Number.parseInt(this.state.size)},
        success: () => {
          console.log('Success')
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  render() {
    if (!this.state.styles || !this.state.currentStyle) {
      return <div className="Style"></div>
    }
    return (
      <div className="Style">
        <div className="style_thumbnails">
          <SelectionThumbnail
          styles={this.state.styles}
          clearSize={this.clearSize}/>
        </div>
        <SelectionForm
          style={this.state.currentStyle.skus}
          handleSize={this.handleSize}
          size={this.state.size}
          countChange={this.countChange}
          addToCart={this.addToCart}/>
      </div>
    )
  }
}

export default Style;