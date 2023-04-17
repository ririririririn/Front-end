import { axiosInstance } from ".";

export const getPosts = async (page = 1) => {
  const { data } = await axiosInstance.get("/posts", {
    params: {
      page,
    },
  });

  return data;
};
export const getPostById = async ({ queryKey }) => {
  console.log(queryKey[1]);
  const { data } = await axiosInstance.get("posts/" + queryKey[1]);
  return data;
};

export const createPost = async (body, files) => {
  const form = new FormData();
  form.append("body", body);
  console.log(files);

  for (let file of files) {
    form.append("files", file);
  }
  const { data } = await axiosInstance.post("posts", form);
  return data;
};