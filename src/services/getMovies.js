import axios from "axios";

const URL = "https://api.themoviedb.org/3/discover/movie?";
const KEY = "api_key=3fd2be6f0c70a2a598f084ddfb75487c";

const URL_TYPES = {
  popular: `${URL}?sort_by=popularity.desc&${KEY}`,
  inTheatres: `${URL}primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${KEY}`,
};

const getMovies = async (param) => {
  const url = URL_TYPES[param];
  try {
    const response = await axios.get(url);
    const { results } = response.data;

    return results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getMovies;
