import React from 'react';
import Arrow from './Arrow.jsx';

const GalleryThumbnail = ({
  handleThumbnailClick,
  thumbnails,
  handleArrowClick,
  currentSelected
}) => {
  const faded = { "opacity": "0.5" }
  const onPoint = { "opacity": "1", "border": "solid" }
  return (
    <div className="thumbnail-carousel">
      <Arrow direction="up" handleArrowClick={handleArrowClick} arrow="/\"/>
        <div id="car-scroll" className="carousel-overview-container">
          {
            thumbnails.map((thumb, index) => {
              return (<div key={index}>
                       <img
                         id={index}
                         className={`gallery-thumbnail ${index}`}
                         type="image"
                         src={thumb}
                         name={index}
                         onClick={handleThumbnailClick}
                         style={currentSelected === index ? onPoint : faded}></img>
                     </div>)
            })
          }
        </div>
      <Arrow direction="down" handleArrowClick={handleArrowClick} arrow="\/"/>
    </div>
  )
}

export default GalleryThumbnail;