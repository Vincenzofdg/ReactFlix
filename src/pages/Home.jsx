import React, {useCallback, useEffect, useState} from "react";
// API
import { getMovies } from "../services/themoviedb";
// Components
import Header from "../component/Header";
import MoviesCard from "../component/MoviesCard";
// Style
import HomeCSS from "./css/Home";

function Home() {
      const [movies, SetMovies] = useState([]);

      const moviesAPI = useCallback(async () => {
            const result = await getMovies();
            SetMovies(result)
      }, [])
      
      useEffect(() => {
            moviesAPI();
      }, [moviesAPI])

      return (
            <>
                  <Header />
                  <HomeCSS>
                        { movies.map(movie => <MoviesCard key={ movie.id } info={ movie } /> ) }
                  </HomeCSS>
            </>
      );
}

export default Home;