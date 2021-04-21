import React from 'react';
import Arrow from './Arrow.jsx';
import GalleryThumbnail from './GalleryThumbnail.jsx';

const DefaultView = ({ mainImage, handleArrowClick, handleThumbnailClick, thumbnails }) => {
  const style = { "backgroundImage": `url(${mainImage})`}
  return (
    <div className="image-slide" style={style}>
      <GalleryThumbnail
        handleThumbnailClick={handleThumbnailClick}
        thumbnails={thumbnails}
        handleArrowClick={handleArrowClick}/>
      <Arrow direction="left" handleArrowClick={handleArrowClick} arrow="<"/>
      <Arrow direction="right" handleArrowClick={handleArrowClick} arrow=">"/>
    </div>
  )
}

export default DefaultView;