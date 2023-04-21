import { instance } from ".";

export const getCurrentUser = async () => {
  const data = await instance.get("/users/current", {});
  return data;
};
