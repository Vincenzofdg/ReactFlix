import React from 'react';
// Style
import HighLightMovieCSS from './css/HighLightMovie'
import playIcon from '../assets/Play.png';
import infoIcon from '../assets/Info.png';


function HighLightMovie({ movie }) {
  const { backdrop_path, title } = movie;
  const cover = "https://image.tmdb.org/t/p/w1280" + backdrop_path;


  const btn = (text, _nav) => {
    const validation = text === 'Assistir';
    return (
      <div
        className={ `btn ${validation ? 'watch' : 'info'}-btn`}
      >
        { !!validation && (<img id='icon' src={playIcon} />) }
        { !validation && (<img id='icon' src={infoIcon} />) }
        <p>{ text }</p>
      </div>
    )
  }

  return (
    <HighLightMovieCSS style={{backgroundImage: `url(${cover})`}}>
      <div className='info'>
        <h1>{title}</h1>
        <div className='btns'>
          {btn('Assistir')}
          {btn('Mais Informacoes')}
        </div>
      </div>
    </HighLightMovieCSS>
  );
}

export default HighLightMovie;