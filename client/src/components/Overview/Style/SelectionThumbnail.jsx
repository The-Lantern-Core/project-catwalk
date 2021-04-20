import React from 'react';

const SelectionThumbnail = ({ styles, clearSize }) => (
  <div>
    {
      styles.map((style) => {
        return <img
          key={style.style_id}
          className="selector-thumbnail"
          type="image"
          src={style.photos[0].thumbnail_url}
          alt={style.name}
          onClick={clearSize}></img>
      })
    }
  </div>
)

export default SelectionThumbnail;