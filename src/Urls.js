import { API_KEY } from "./Constants/Constant";

export const Popular = `trending/movie/week?api_key=${API_KEY}`;
export const Action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
