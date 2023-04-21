import { instance } from ".";

export const signup = async (name, email, password) => {
  const data = await instance.post("/register", {
    name,
    email,
    password,
  });
  console.log(data);
  return data;
};

export const login = async (inputs) => {
  const { data } = await instance.post("/login", inputs);

  const token = data.access_token;
  console.log(token);

  instance.defaults.headers.Authorization = `Bearer ${token}`;

  localStorage.setItem("access-token", token);
  return token;
};
