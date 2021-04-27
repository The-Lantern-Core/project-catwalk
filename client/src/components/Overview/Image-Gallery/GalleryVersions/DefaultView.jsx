import React from 'react';
import Modal from 'react-modal';
import ExpandedView from './ExpandedView.jsx';
import Arrow from './Arrow.jsx';
import GalleryThumbnail from './GalleryThumbnail.jsx';


const DefaultView = ({ mainImage, handleArrowClick, handleThumbnailClick, thumbnails, showExpanded, handleOpenExpanded, handleCloseExpanded }) => {
  const expand = <span className="expand-button" onClick={handleOpenExpanded}>Expand</span>
  const compress = <span className="compress-button" onClick={handleCloseExpanded}>Compress</span>
  const style = { "backgroundImage": `url(${mainImage})`}
  return (
    <div className="image-slide" style={style}>
      <GalleryThumbnail
        handleThumbnailClick={handleThumbnailClick}
        thumbnails={thumbnails}
        handleArrowClick={handleArrowClick}/>
      {showExpanded === true ? compress : expand}
      <Arrow direction="left" handleArrowClick={handleArrowClick} arrow="<"/>
      <Arrow direction="right" handleArrowClick={handleArrowClick} arrow=">"/>
    </div>
  )
}

export default DefaultView;