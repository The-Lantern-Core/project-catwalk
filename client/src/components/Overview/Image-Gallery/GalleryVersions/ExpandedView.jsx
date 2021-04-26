import React from 'react';
import Arrow from './Arrow.jsx';
import GalleryThumbnail from './GalleryThumbnail.jsx';

const ExpandedView = ({ mainImage, handleArrowClick, handleThumbnailClick, thumbnails, handleCloseExpanded }) => {
  const style = { "backgroundImage": `url(${mainImage})`}
  return (
    <div className="expanded-image-slide" style={style}>
      <GalleryThumbnail
        handleThumbnailClick={handleThumbnailClick}
        thumbnails={thumbnails}
        handleArrowClick={handleArrowClick}/>
      <span className="expand-button" onClick={handleCloseExpanded}>Compress</span>
      <Arrow direction="left" handleArrowClick={handleArrowClick} arrow="<"/>
      <Arrow direction="right" handleArrowClick={handleArrowClick} arrow=">"/>
    </div>
  )
}

export default ExpandedView;