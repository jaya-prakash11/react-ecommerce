import axios from "axios";

export default axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const AxiosPrivate = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/auth",
});
