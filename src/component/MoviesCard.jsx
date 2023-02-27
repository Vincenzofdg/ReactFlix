import React, { useState } from 'react';
import MoviesCardCSS from './css/MovieCard'

function MoviesCard({ info }) {
  const [mouseOver, SetMouseOver] = useState(false);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const {poster_path, title, backdrop_path} = info

  return (
    <MoviesCardCSS>
      <div className={!!mouseOver ? 'selected' : 'not-selected'}>
        <img 
          className='poster'
          src={IMG_PATH + backdrop_path} 
          alt={`${title} Poster`}
          onMouseOver={() => SetMouseOver(true)}
          onMouseLeave={() => SetMouseOver(false)}
        />

        <div className='info' hidden={ !mouseOver }>
          <span>{title}</span>
        </div>

      </div>
    </MoviesCardCSS>
  );
}

export default MoviesCard;