import React from "react";
import { useDispatch } from "react-redux";
import { updateBlog } from "../reducers/blogReducer";

const Blog = ({ blog }) => {
  const dispatch = useDispatch();

  const handleLike = async () => {
    const updatedBlog = blog;
    updatedBlog.likes++;
    updatedBlog.user = blog.user.id;
    dispatch(updateBlog(updatedBlog));
  };

  console.log("blog", blog);

  return blog ? (
    <div>
      <h2>{blog.title}</h2>
      <a href={blog.url}>{blog.url}</a>
      <p>
        likes <span>{blog.likes}</span>
        <button onClick={handleLike}>like</button>
      </p>
      {blog.user ? <p>added by {blog.user.name}</p> : null}
    </div>
  ) : null;
};

export default Blog;
