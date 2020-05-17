import React, { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog, setBlogs, blogs, user }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };
  const [showBlog, setShowBlog] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

  const handleLike = async () => {
    const updatedBlog = blog;
    updatedBlog.likes++;
    setLikes(likes + 1);
    try {
      await blogService.updateBlog(updatedBlog);
    } catch (err) {
      console.log("Could not update blog", err.response.data);
    }
  };

  const handleDelete = async () => {
    const confirmedDelete = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}?`
    );
    if (confirmedDelete) {
      try {
        await blogService.deleteBlog(blog);
        setBlogs(blogs.filter((b) => b.id !== blog.id));
      } catch (err) {
        console.log("Failed to delete blog", err);
      }
    }
  };

  const blogDetails = () => {
    return showBlog ? (
      <div>
        <p>{blog.url}</p>
        <p>
          likes {likes} <button onClick={handleLike}>like</button>
        </p>
        {blog.user ? <p>{blog.user.name}</p> : null}
        {user.username === blog.user.username ? (
          <button onClick={handleDelete}>remove</button>
        ) : null}
      </div>
    ) : null;
  };

  return (
    <div style={blogStyle} className="blog">
      <p>
        {blog.title} {blog.author}
        <button onClick={() => setShowBlog(!showBlog)}>
          {showBlog ? "hide" : "view"}
        </button>
      </p>
      {blogDetails()}
    </div>
  );
};

export default Blog;
