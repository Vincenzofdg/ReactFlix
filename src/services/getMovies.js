import axios from "axios";

const URL = "https://api.themoviedb.org/3/discover/movie?";
const KEY = process.env.REACT_APP_API_KEY;

const { date01, date02 } = Array.from({ length: 2 }, () => new Date()).reduce(
  (acc, cur, i) => {
    i === 0 && cur.setMonth(cur.getMonth() - 1);
    const formated = cur.toISOString().substring(0, 10);
    acc[`date0${i + 1}`] = formated;
    return acc;
  },
  { date01: "", date02: "" }
);

const URL_TYPES = {
  popular: `${URL}?sort_by=popularity.desc&${KEY}`,
  inTheatres: `${URL}primary_release_date.gte=${date01}&primary_release_date.lte=${date02}&${KEY}`,
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
