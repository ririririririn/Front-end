import { instance } from ".";
export const signup = (name, email, password) => {
  const status = instance.post("/users", {
    name,
    email,
    password,
  });
  console.log(status);
  return status;
};
