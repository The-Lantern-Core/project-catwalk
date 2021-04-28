import React from 'react';
import Modal from 'react-modal';
import ExpandedView from './ExpandedView.jsx';
import Arrow from './Arrow.jsx';
import GalleryThumbnail from './GalleryThumbnail.jsx';


const DefaultView = ({
  mainImage,
  handleArrowClick,
  handleThumbnailClick,
  thumbnails,
  showExpanded,
  handleOpenExpanded,
  handleCloseExpanded,
  currentSelected,
  getCursorPosition
}) => {
  const expand = <div className="expand-button" onClick={handleOpenExpanded}></div>
  const compress = <div className="compress-button"
                      onClick={handleCloseExpanded}
                      onMouseMove={getCursorPosition}></div>
  const style = { "backgroundImage": `url(${mainImage})`}
  return (
    <div className="image-slide" style={style}>
      <GalleryThumbnail
        handleThumbnailClick={handleThumbnailClick}
        thumbnails={thumbnails}
        handleArrowClick={handleArrowClick}
        currentSelected={currentSelected}/>
      <Arrow direction="left" handleArrowClick={handleArrowClick} arrow="<"/>
      {showExpanded === true ? compress : expand}
      <Arrow direction="right" handleArrowClick={handleArrowClick} arrow=">"/>
    </div>
  )
}

export default DefaultView;