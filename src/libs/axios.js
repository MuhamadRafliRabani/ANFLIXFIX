import axios from "axios";

export const axiosIntesnce = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
