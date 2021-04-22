import React from 'react';
import Arrow from './Arrow.jsx';

const GalleryThumbnail = ({ handleThumbnailClick, thumbnails, handleArrowClick }) => (
  <div className="thumbnail-carousel">
    <Arrow direction="up" handleArrowClick={handleArrowClick} arrow="/\"/>
      <div className="carousel-overview-container">
        {
          thumbnails.map((thumb, index) => {
            return <div key={index}>
                     <img
                       className="gallery-thumbnail"
                       type="image"
                       src={thumb}
                       name={index}
                       onClick={handleThumbnailClick}></img>
                   </div>
          })
        }
      </div>
    <Arrow direction="down" handleArrowClick={handleArrowClick} arrow="\/"/>
  </div>
)

export default GalleryThumbnail;