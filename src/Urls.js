import { API_KEY } from "./Constants/Constant";

export const Popular = `trending/movie/week?api_key=${API_KEY}`;
export const Action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const Comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const Drama = `discover/movie?api_key=${API_KEY}&with_genres=18`;
export const SciFi = `discover/movie?api_key=${API_KEY}&with_genres=878`;
export const Thriller = `discover/movie?api_key=${API_KEY}&with_genres=53`;
export const Animation = `discover/movie?api_key=${API_KEY}&with_genres=16`;
export const Western = `discover/movie?api_key=${API_KEY}&with_genres=37`;
