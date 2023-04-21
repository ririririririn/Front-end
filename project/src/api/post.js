import { instance } from ".";

export const getPosts = async (page = 1, authorId) => {
  const { data } = await instance.get("/posts", {
    params: {
      page,
      authorId,
    },
  });
  return data;
};

export const uploadPosts = async (content, files) => {
  const { data } = await instance.post("/posts", { content, files });
  console.log(data);
  return data;
};
