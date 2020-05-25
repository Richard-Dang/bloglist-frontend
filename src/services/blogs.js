import axios from "axios";

const blogsApi = axios.create();
const baseUrl = "/api/blogs";

blogsApi.interceptors.request.use(
  (config) => {
    const loggedInUserJSON = window.localStorage.getItem("loggedInBlogUser");
    if (loggedInUserJSON) {
      const token = JSON.parse(loggedInUserJSON).token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const getAll = async () => {
  try {
    const response = await blogsApi.get(baseUrl);
    return response.data;
  } catch (err) {
    console.log("err.response.data", err.response.data);
  }
};

const createBlog = async (blog) => {
  try {
    const response = await blogsApi.post(baseUrl, blog);
    return response.data;
  } catch (err) {
    console.log("err.response.data", err.response.data);
  }
};

const updateBlog = async (blog) => {
  try {
    const response = await blogsApi.put(`${baseUrl}/${blog.id}`, blog);
    return response.data;
  } catch (err) {
    console.log("err.response.data", err.response.data);
  }
};

const deleteBlog = async (blog) => {
  try {
    const response = await blogsApi.delete(`${baseUrl}/${blog.id}`);
    return response.data;
  } catch (err) {
    console.log("err.response.data", err.response.data);
  }
};

export default { getAll, createBlog, updateBlog, deleteBlog };
