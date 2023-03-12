import React, {useContext, useState, useEffect} from "react";
import Context from "../data/Context";
// Components
import Header from "../component/Header";
import HighLightMovie from "../component/HighLightMovie";
// import MoviesCard from "../component/MoviesCard";
// Style
import HomeCSS from "./css/Home";

function Home() {
      const {cinema, topMovies: popular} = useContext(Context);
      const [loading, SetLoading] = useState(true);
      const [top10Movies, setTop10Movies] = useState({});
      const [timer, SetTimer] = useState(0)

      useEffect(() => {
            const loadTime = 1000;
            const nextBannerTime = 5000
            const checkAPI = cinema.length > 0 && popular.length > 0;

            if (checkAPI) {
                  const top10 = Array.from({length: 11}, (elem, index) => elem = popular[index])
                  setTop10Movies(top10)
                  let i = 0;
                  setInterval(() => {
                        i = i > 10 ? 0 : i;
                        SetTimer(i)
                        i++
                  }, nextBannerTime)
                  setTimeout(() => SetLoading(false), loadTime);
            }
      }, [cinema, popular])

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
                        </HomeCSS>
                  )
            }
            </>
      );
}

export default Home;