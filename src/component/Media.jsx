import React from 'react';
import MediaCSS from './css/MovieCard'
// Style
import playIcon from '../assets/Play.png';
import infoIcon from '../assets/Info.png';

function Media(props) {
  const { img, walker, name, play, selected } = props
  const cover = "https://image.tmdb.org/t/p/w1280" + img;

  const handlePlay = () => {
    selected(name)
    play(true)
  }; 

  return (
    <MediaCSS style={{
      backgroundImage: `url(${cover})`, 
      // limites 900 e -900
      transform: `translateX(${ walker }00%)`,
      transition: 'transform 0.5s ease-in-out'
    }}>
      <div className='footer'>
        <p><strong>{ name }</strong></p>
        <div className='links'>
          <img onClick={ handlePlay } src={ playIcon } alt="Play" />
          <img src={ infoIcon } alt="Info" />
        </div>
      </div>
    </MediaCSS>
  );
}

export default Media;