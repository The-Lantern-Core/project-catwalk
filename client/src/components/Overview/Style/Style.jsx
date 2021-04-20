import React from 'react';
import SelectionThumbnail from './SelectionThumbnail.jsx';
import SelectionForm from './SelectionForm.jsx';



class Style extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStyle: null,
      styles: null,
      size: null
    }
    this.handleSize = this.handleSize.bind(this);
    this.clearSize = this.clearSize.bind(this);
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
    }
  }

  clearSize(e) {
    e.preventDefault()
    this.setState({size: null})
    this.props.onThumbnailClick(e.target.alt)
  }

  render() {
    if (!this.state.styles || !this.state.currentStyle) {
      return <div></div>
    }
    return (
      <div className="Style">
        <div className="style_thumbnails">
          <SelectionThumbnail
          styles={this.state.styles}
          clearSize={this.clearSize}/>
        </div>
        <div className="size_quantity_form">
          <SelectionForm
            style={this.state.currentStyle.skus}
            handleSize={this.handleSize}
            size={this.state.size}/>
        </div>
      </div>
    )
  }
}

export default Style;