import { instance } from ".";

export const getPosts = async () => {
  const data = await instance.get("/posts");
  return data;
};
