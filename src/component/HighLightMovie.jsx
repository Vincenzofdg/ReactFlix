import React from 'react';
import HighLightMovieCSS from './css/HighLightMovie'


function HighLightMovie({ movie }) {
  const { backdrop_path, title } = movie;
  const cover = "https://image.tmdb.org/t/p/w1280" + backdrop_path;


  const btn = (text, _nav) => {
    return(
      <button
        type="submit"
        className='watch-btn'
      >
        { text }
      </button>)
  }

  return (
    <HighLightMovieCSS style={{backgroundImage: `url(${cover})`}}>
      <div className='info'>
        <h1>{title}</h1>
        {btn('Assistir')}
      </div>
    </HighLightMovieCSS>
  );
}

export default HighLightMovie;