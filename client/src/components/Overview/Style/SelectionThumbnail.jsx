import React from 'react';

const SelectionThumbnail = ({ styles, clearSize, selected }) => {
  const bordered = {"border": "solid", "borderWidth": "thick", "borderColor": "red"}
  const nonBordered = {"border": "none"}
  return (
    <div className="style_thumbnails">
      {
        styles.map((style) => {
          return <img
            key={style.style_id}
            id={style.style_id}
            className={'selector'}
            type="image"
            src={style.photos[0].thumbnail_url}
            title={style.name}
            alt={style.name}
            onClick={clearSize}
            style={selected === style.style_id ? bordered : nonBordered}></img>

        })
      }
    </div>
  )
}

export default SelectionThumbnail;