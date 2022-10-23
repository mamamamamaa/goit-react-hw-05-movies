import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '22ffd9c27f352ff768d0db984597ea70' };

export const getTrends = async () => {
  return (await axios.get('/trending/all/day')).data;
};

export const getSearch = async query => {
  return (await axios.get(`/search/movie?query=${query}`)).data;
};

export const getMovieDetails = async id => {
  return (await axios.get(`/movie/${id}`)).data;
};

export const getMovieCredits = async id => {
  return (await axios.get(`/movie/${id}/credits`)).data;
};

export const getMovieReviews = async id => {
  return (await axios.get(`/movie/${id}/reviews`)).data;
};
