import React from 'react';
import Modal from 'react-modal';
import ExpandedView from './ExpandedView.jsx';
import Arrow from './Arrow.jsx';
import GalleryThumbnail from './GalleryThumbnail.jsx';


const DefaultView = ({ mainImage, handleArrowClick, handleThumbnailClick, thumbnails, showExpanded, handleOpenExpanded, handleCloseExpanded }) => {
  const style = { "backgroundImage": `url(${mainImage})`}
  Modal.setAppElement('.Gallery')
  return (
    <div className="image-slide" style={style}>
      <Modal
        isOpen={showExpanded}
        contentLabel="Expanded Image Gallery"
        className="expanded-view"
        preventScroll={true}
        ariaHideApp={true}>
        <ExpandedView
          mainImage={mainImage}
          handleArrowClick={handleArrowClick}
          handleThumbnailClick={handleThumbnailClick}
          thumbnails={thumbnails}
          handleCloseExpanded={handleCloseExpanded}/>
      </Modal>
      <GalleryThumbnail
        handleThumbnailClick={handleThumbnailClick}
        thumbnails={thumbnails}
        handleArrowClick={handleArrowClick}/>
      <span className="expand-button" onClick={handleOpenExpanded}>Expand</span>
      <Arrow direction="left" handleArrowClick={handleArrowClick} arrow="<"/>
      <Arrow direction="right" handleArrowClick={handleArrowClick} arrow=">"/>
    </div>
  )
}

export default DefaultView;