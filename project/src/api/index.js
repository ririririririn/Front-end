import axios from "axios";

export const instance = axios.create({
  baseURL: "http://15.165.115.167",
  /*  headers: {Authorization:}, */
});