import React from "react";
import Blog from "../components/Blog";
import BlogForm from "../components/BlogForm";
import Notification from "../components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/userReducer";

function BlogList() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  const blogs = useSelector(({ blogs }) => {
    return blogs.sort((a, b) => a.likes < b.likes);
  });

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      <p>{user.name} has logged in</p>
      <button onClick={handleLogOut}>logout</button>
      <BlogForm />
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
