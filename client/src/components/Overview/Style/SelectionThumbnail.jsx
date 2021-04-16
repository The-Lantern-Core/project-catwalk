import React from 'react';

const SelectionThumbnail = ({ styles }) => (
  <form>
    {
      styles.map((style) => {
        return <input
          key={style.style_id}
          className="selector-thumbnail"
          type="image"
          src={style.photos[0].thumbnail_url}
          alt={style.name}></input>
      })
    }
  </form>
)

export default SelectionThumbnail;