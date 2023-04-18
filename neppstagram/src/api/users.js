import { axiosInstance } from ".";

// const userAxios = axios.create({
//   baseURL: "http://101.101.218.43/users",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwic3ViIjo5MSwiaWF0IjoxNjgxNDM4OTkyLCJleHAiOjE2ODE1MjUzOTJ9.sPN8gzlbpUgINYkDRcvXYXlm2rxSBtGon5MdUjDi2ic",
//   },
// });

export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get("users/current", {});
  return data;
};

// export const getCurrentUserId = async () => {
//   const { data } = await axiosInstance.get("users/current", {});
//   const userId = data.id;
//   return userId;
// };

export const updateProfile = async (file) => {
  const form = new FormData();
  console.log(form);
  form.append("profile", file);
  const { data } = await axiosInstance.patch("users/profile", form);
  return data;
};

export const searchUser = async (name, page = 1) => {
  if (name === "") return [];
  const { data } = await axiosInstance.get("users/search", {
    params: { name, page },
  });
  return data;
};

//name , page ,get
