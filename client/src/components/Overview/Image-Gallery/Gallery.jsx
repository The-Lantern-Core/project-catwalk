import React from 'react';
import DefaultView from './GalleryVersions/DefaultView.jsx';
import Arrow from './GalleryVersions/Arrow.jsx';



class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageArray: null,
      thumbnailArray: null,
      currentIndex: 0,
      maxIndex: null
    }
    this.handleArrowClick = this.handleArrowClick.bind(this)
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this)
    this.handleArrowChange = this.handleArrowChange.bind(this)
  }

  componentDidUpdate(oldProps) {
    if (this.props.style !== oldProps.style) {
      var imageResult = [];
      var thumbResult = [];
      this.props.style.photos.forEach((image) => {
        imageResult.push(image.url);
        thumbResult.push(image.thumbnail_url);
      })
      this.setState({imageArray: imageResult, thumbnailArray: thumbResult})
      this.setState({maxIndex: (imageResult.length - 1)})
      this.setState({currentIndex: 0}, this.handleArrowChange)
    }
  }

  handleArrowClick(e) {
    if (e.target.name === "right" && this.state.currentIndex < this.state.maxIndex) {
      this.setState({currentIndex: this.state.currentIndex + 1}, this.handleArrowChange)
    } else if (e.target.name === "left" && this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1}, this.handleArrowChange)
    } else if (e.target.name === "up" && this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1}, this.handleArrowChange)
    } else if (e.target.name === "down" && this.state.currentIndex < this.state.maxIndex) {
      this.setState({currentIndex: this.state.currentIndex + 1}, this.handleArrowChange)
    }
  }

  handleArrowChange() {
    if (this.state.currentIndex !== 0) {
      document.querySelector('.left').style.visibility="visible"
      document.querySelector('.up').style.visibility="visible"
    } else {
      document.querySelector('.left').style.visibility="hidden"
      document.querySelector('.up').style.visibility="hidden"
    }
    if (this.state.currentIndex !== this.state.maxIndex) {
      document.querySelector('.right').style.visibility="visible"
      document.querySelector('.down').style.visibility="visible"
    } else {
      document.querySelector('.right').style.visibility="hidden"
      document.querySelector('.down').style.visibility="hidden"
    }
  }

  handleThumbnailClick(e) {
    var num = Number.parseInt(e.target.name)
    this.setState({currentIndex: num}, this.handleArrowChange)
  }

  render() {
    if (!this.state.imageArray || !this.state.thumbnailArray) {
      return (<div className="Gallery"></div>)
    }
    return (
      <div className="Gallery">

        <DefaultView
          mainImage={this.state.imageArray[this.state.currentIndex]}
          handleArrowClick={this.handleArrowClick}
          thumbnails={this.state.thumbnailArray}
          handleThumbnailClick={this.handleThumbnailClick}/>
      </div>
    )
  }
}

export default Gallery;