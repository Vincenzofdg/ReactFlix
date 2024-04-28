import React, { useState } from "react";
import Context from "./Context";
// API
import { popular, inTheatres } from "../services/movieType";
import getMovies from "../services/getMovies";
import getTvShows from "../services/getTvShows";

function Provider({ children }) {
  const [topMovies, SetTopMovies] = useState([]);
  const [cinema, SetCinema] = useState([]);
  const [tvShows, SetTvShows] = useState([]);

  useState(() => {
    async function fetchAPI() {
      try {
        const moviesList01 = await getMovies(popular);
        const moviesList02 = await getMovies(inTheatres);
        const tvShows = await getTvShows();

        SetTopMovies(moviesList01);
        SetCinema(moviesList02);
        SetTvShows(tvShows);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAPI();
  }, []);

  const data = {
    topMovies,
    cinema,
    tvShows,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export default Provider;
