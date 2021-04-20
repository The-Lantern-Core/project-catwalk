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
      this.setState({currentIndex: 0})
    }
  }

  handleArrowClick(e) {
    if (e.target.name === "right" && this.state.currentIndex < this.state.maxIndex) {
      this.setState({currentIndex: this.state.currentIndex + 1})
    } else if (e.target.name === "left" && this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1})
    }
  }

  handleThumbnailClick(e) {
    var num = Number.parseInt(e.target.name)
    this.setState({currentIndex: num})
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