import axios from "axios";

const URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
// const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

const getMovies = async () => {
  const response = await axios.get(URL);
  const { results } = response.data;
  return results;
};

export { getMovies };
