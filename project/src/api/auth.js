import axios from "axios";
import { instance } from ".";

export const login = () => {};

export const signup = async (name, email, password) => {
  const data = await instance.post("/register", {
    name,
    email,
    password,
  });
  console.log(data);
  return data;
};
