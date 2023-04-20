import axios from "axios";
const token = localStorage.getItem("access-token");

export const instance = axios.create({
  baseURL: "http://15.165.115.167",
  headers: { Authorization: `Bearer ${token}` },
});
