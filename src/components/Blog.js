import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog, deleteBlog } from "../reducers/blogReducer";

const Blog = ({ blog }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

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
    updatedBlog.user = blog.user.id;
    setLikes(likes + 1);
    dispatch(updateBlog(updatedBlog));
  };

  const handleDelete = async () => {
    const confirmedDelete = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}?`
    );
    if (confirmedDelete) {
      dispatch(deleteBlog(blog));
    }
  };

  const blogDetails = () => {
    return showBlog ? (
      <div>
        <p>{blog.url}</p>
        <p>
          likes <span className="likes">{likes}</span>
          <button onClick={handleLike}>like</button>
        </p>
        {blog.user ? <p>{blog.user.name}</p> : null}
        {blog.user && user.username === blog.user.username ? (
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
