import React, { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog }) => {
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
    await blogService.updateBlog(updatedBlog);
    try {
    } catch (err) {
      console.log("Could not update blog", err);
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
      </div>
    ) : null;
  };

  return (
    <div style={blogStyle}>
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
