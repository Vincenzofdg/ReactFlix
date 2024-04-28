import axios from "axios";

const URL = "https://api.themoviedb.org/3/discover/tv?";
const KEY = "api_key=3fd2be6f0c70a2a598f084ddfb75487c";

const getTvShows = async () => {
  const url = URL + "?sort_by=popularity.desc&" + KEY;

  try {
    const response = await axios.get(url);
    const { results } = response.data;

    return results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getTvShows;
