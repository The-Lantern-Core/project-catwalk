import React from 'react';

const GalleryThumbnail = ({ handleThumbnailClick, thumbnails }) => (
  <div className="thumbnail-carousel">
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
  </div>
)

export default GalleryThumbnail;