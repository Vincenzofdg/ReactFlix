import React, {useContext, useState, useEffect} from "react";
import Context from "../data/Context";
// Components
import Header from "../component/Header";
import HighLightMovie from "../component/HighLightMovie";
import MoviesCard from "../component/MovieCard";
// Style
import HomeCSS from "./css/Home";
import Arrow from "../assets/Arrow-Movies.png"

function Home() {
      const {cinema, topMovies: populars} = useContext(Context);
      const [loading, SetLoading] = useState(true);
      const [top10Movies, setTop10Movies] = useState({});
      const [timer, SetTimer] = useState(0);
      const [walker, SetWalker] = useState(9);

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

      return (
            <>
                  <Header />
            {
                  !!loading ? (<h1>Loading</h1>) : (
                        <HomeCSS>
                              <div className="carousel-auto">
                                    <div className="banners">
                                          {top10Movies.map((movie, i) => (
                                                      <HighLightMovie 
                                                            key={'top-' + i} 
                                                            movie={ movie }
                                                            timer={ timer } 
                                                      />)
                                                )}
                                    </div>
                              </div>
                              <span id="title">Most Popular</span>
                              <div className="carousel-manual">
                                    <div className="covers">
                                          <div className="arrow left" onClick={() => SetWalker(walker + 1 === 10 ? 9 : walker + 1)}>
                                                <img src={ Arrow } alt="Arrow Left" />
                                          </div>
                                          { populars.map( movie => <MoviesCard key={movie.title + '-key'} movie={ movie } walker={ walker } /> ) }
                                          <div className="arrow right" onClick={() => SetWalker(walker - 1 === -10 ? 9 : walker - 1)}>
                                                <img src={ Arrow }  alt="Arrow Right" />
                                          </div>
                                    </div>
                              </div>
                        </HomeCSS>
                  )
            }
            </>
      );
}

export default Home;