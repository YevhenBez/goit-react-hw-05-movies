import axios from 'axios';

const API_KEY = 'bb93938b285723bfd82d9b17341efab3';
const API_URL = 'https://api.themoviedb.org/3/';
const TiME_WINDOW = 'week';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}trending/movie/${TiME_WINDOW}?api_key=${API_KEY}&page=1`
  );

  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(
    `${API_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(
    `${API_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );

  // console.log(data);
  return data;
};

export const fetchSearchMovie = async query => {
  const { data } = await axios.get(
    `${API_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return data;
};
