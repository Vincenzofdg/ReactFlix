import React, { useState } from "react";
import Context from "./Context";
// API
import getMovies from "../services/getMovies";
import { popular, inTheatres } from "../services/movieType";

function Provider({ children }) {
  const [topMovies, SetTopMovies] = useState([]);
  const [cinema, SetCinema] = useState([]);

  useState(() => {
    async function fetchAPI() {
      try {
        const moviesList01 = await getMovies(popular);
        const moviesList02 = await getMovies(inTheatres);
        SetTopMovies(moviesList01);
        SetCinema(moviesList02);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAPI();
  }, []);

  const data = {
    topMovies,
    cinema,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export default Provider;
