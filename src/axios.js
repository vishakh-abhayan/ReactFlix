import axios from "axios";
import { baseUrl } from "./Constants/Constant";
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
