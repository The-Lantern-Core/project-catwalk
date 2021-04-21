import React from 'react';
import Arrow from './Arrow.jsx';

const GalleryThumbnail = ({ handleThumbnailClick, thumbnails, handleArrowClick }) => (
  <div className="thumbnail-carousel">
    <Arrow direction="up" handleArrowClick={handleArrowClick} arrow="/\"/>
    {
      thumbnails.map((thumb, index) => {
        return <div key={index}>
                 <img
                   className="gallery-thumbnail"
                   type="image"
                   src={thumb}
                   name={index}
                   onClick={handleThumbnailClick}></img>
                 <br></br>
               </div>
      })
    }
    <Arrow direction="down" handleArrowClick={handleArrowClick} arrow="\/"/>
  </div>
)

export default GalleryThumbnail;