import axios from "axios";

export const axiosIntesnce = axios.create({
  baseURL: process.env.API_BASE_URL,
});
