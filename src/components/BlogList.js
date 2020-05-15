import React, { useState } from "react";
import Blog from "../components/Blog";
import BlogForm from "../components/BlogForm";
import Notification from "../components/Notification";

function BlogList({ user, blogs, setUser, setBlogs }) {
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogOut = () => {
    window.localStorage.removeItem("loggedInBlogUser");
    setUser(null);
  };

  const displayBlogs = () => {
    blogs.sort((a, b) => a.likes < b.likes);
    return blogs.map((blog) => (
      <Blog
        key={blog.id}
        blog={blog}
        setBlogs={setBlogs}
        blogs={blogs}
        user={user}
      />
    ));
  };

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} />
      <p>{user.name} has logged in</p>
      <button onClick={handleLogOut}>logout</button>
      <BlogForm blogs={blogs} setBlogs={setBlogs} setMessage={setMessage} />
      {displayBlogs()}
    </div>
  );
}

export default BlogList;
