import React from 'react';
// Style
import HighLightMovieCSS from './css/HighLightMovie'
import playIcon from '../assets/Play.png';
import infoIcon from '../assets/Info.png';


function HighLightMovie({ movie, timer, play, selected }) {
  const { backdrop_path, title } = movie;
  const cover = "https://image.tmdb.org/t/p/w1280" + backdrop_path;

  const handlePlay = () => {
    selected(title)
    play(true)
  }; 

  const btn = (text, _nav) => {
    const validation = text === 'Watch';

    return (
      <div
        className={ `btn ${validation ? 'watch' : 'info'}-btn`}
        key={ text + '-key' }
        onClick={handlePlay}
      >
        { !!validation && (<img id='icon' src={playIcon} alt="Play" />) }
        { !validation && (<img id='icon' src={infoIcon} alt="Info" />) }
        <p>{ text }</p>
      </div>
    )
  }

  return (
    <HighLightMovieCSS style={{ 
        backgroundImage: `url(${cover})`, 
        transform: `translateX(-${timer}00%)`,
        transition: 'transform 0.5s ease-in-out',
      }}>
      <div className='info'>
        <h1>{title}</h1>
        <div className='btns'>
          { ['Watch', 'More Info'].map(text => btn(text)) }
        </div>
      </div>
    </HighLightMovieCSS>
  );
}

export default HighLightMovie;