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
      const [highLight, SetHighLight] = useState({})

      useEffect(() => {
            const checkAPI = cinema.length > 0 && popular.length > 0;
            const loadingTime = 1000;
            if (checkAPI) {
                  SetHighLight(popular[0])
                  setTimeout(() => SetLoading(false), loadingTime);
            }
      }, [cinema, popular])

      return (
            <>
                  <Header />
            {
                  !!loading ? (<h1>Loading</h1>) : (
                        <HomeCSS>
                              <HighLightMovie movie={ highLight } />
                        </HomeCSS>
                  )
            }
            </>
      );
}

export default Home;