// tmdb.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchTrending = (page = 1) =>
  axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });

export const searchMovies = (query, page = 1) =>
  axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      page: page,
    },
  });

export const fetchMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: "videos,credits",
    },
  });

export const fetchTopRatedMovies = (page = 1) =>
  axios.get(`${BASE_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });

export const fetchUpcomingMovies = (page = 1) =>
  axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
