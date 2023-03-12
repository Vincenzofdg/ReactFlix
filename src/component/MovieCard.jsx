import React from 'react';
import MoviesCardCSS from './css/MovieCard'
// Style
import playIcon from '../assets/Play.png';
import infoIcon from '../assets/Info.png';

function MoviesCard({ movie, walker }) {
  // const { poster_path, title, backdrop_path, popularity } = movie;
  const { title, backdrop_path } = movie;
  const cover = "https://image.tmdb.org/t/p/w1280" + backdrop_path;

  return (
    <MoviesCardCSS style={{ 
      backgroundImage: `url(${cover})`, 
      // limites 900 e -900
      transform: `translateX(${ walker }00%)`,
      transition: 'transform 0.5s ease-in-out'
    }}>
      <div className='footer'>
        <p><strong>{ title }</strong></p>
        <div className='links'>
          <img src={ playIcon } alt="Play" />
          <img src={ infoIcon } alt="Info" />
        </div>
      </div>
    </MoviesCardCSS>
  );
}

export default MoviesCard;