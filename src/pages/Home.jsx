import React, {useContext, useState, useEffect} from "react";
import Context from "../data/Context";
// Components
import Header from "../component/Header";
import HighLightMovie from "../component/HighLightMovie";
import Media from "../component/Media";
import Play from "../component/Play";
// Style
import HomeCSS from "./css/Home";
import Arrow from "../assets/Arrow-Movies.png"

function Home() {
      const {cinema, topMovies: populars, tvShows} = useContext(Context);
      const [loading, SetLoading] = useState(true);
      const [top10Movies, setTop10Movies] = useState({});
      const [timer, SetTimer] = useState(0);
      const [play, setPlay] = useState(false);
      const [selected, setSelected] = useState('');
      const [walker01, SetWalker01] = useState(9);
      const [walker02, SetWalker02] = useState(9);

      useEffect(() => {
            const loadTime = 1000;
            const nextBannerTime = 5500
            const checkAPI = cinema.length > 0 && populars.length > 0;

            if (checkAPI) {
                  const top10 = Array.from({length: 11}, (elem, index) => elem = cinema[index])
                  setTop10Movies(top10)
                  let i = 0;
                  setInterval(() => {
                        i = i > 10 ? 0 : i;
                        SetTimer(i)
                        i++
                  }, nextBannerTime)
                  setTimeout(() => SetLoading(false), loadTime);
            }
      }, [cinema, populars])

      const selecionContainer = (text, type) => {
            const name = !!text.includes('Movies') ? 'title' : 'name';
            const tracker = !!text.includes('Movies') ? walker01 : walker02;

            const forward = () => {
                  const validation = !!text.includes('Movies');
                  const rule = (i) => i + 1 === 10 ? 9 : i + 1;
                  validation ? SetWalker01(rule) : SetWalker02(rule);
            }

            const backwards = () => {
                  const validation = !!text.includes('Movies');
                  const rule = (i) => i - 1 === -10 ? 9 : i - 1;
                  validation ? SetWalker01(rule) : SetWalker02(rule);
            }

            return (
                  <>
                        <span id="title">{text}</span>
                        <div className="carousel-manual">
                              <div className="covers">
                                    <div className="arrow left" onClick={forward}>
                                          <img src={ Arrow } alt="Arrow Left" />
                                    </div>
                                    {type.map( media => 
                                          <Media 
                                                key={media[name] + '-key'} 
                                                name={ media[name] } 
                                                img={ media['backdrop_path'] } 
                                                walker={ tracker }
                                                play= { setPlay }
                                                selected={ setSelected }
                                          />)}
                                    <div className="arrow right" onClick={backwards}>
                                          <img src={ Arrow }  alt="Arrow Right" />
                                    </div>
                              </div>
                        </div>
                  </>
            )
      }

      return (
            <>
                  <Header />
            {
                  !!loading ? (<h1>Loading</h1>) : (
                        <HomeCSS 
                              style={!!play ? {filter: "blur(4px)"} : {filter: "blur(0)"}}
                        >
                              <div className="carousel-auto">
                                    <div className="banners">
                                          {top10Movies.map((movie, i) => (
                                                      <HighLightMovie 
                                                            key={'top-' + i} 
                                                            movie={ movie }
                                                            timer={ timer }
                                                            play={ setPlay }
                                                            selected={ setSelected }
                                                      />)
                                                )}
                                    </div>
                              </div>
                              { selecionContainer('Most Popular Movies', populars) }
                              { selecionContainer('Tv Shows', tvShows) }
                        </HomeCSS>
                  )
            }

            {!!play && (
                  <>
                        <div 
                              style={ styles.view }
                              onClick={() => setPlay(false)}
                        />
                        <Play name={ selected } />    
                  </>
            )}
            </>
      );
}

const styles = {
      view: {
            opacity: "1.0",
            width: "99vw",
            height: "110%",
            zIndex: "99",

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)"
      },
}

export default Home;