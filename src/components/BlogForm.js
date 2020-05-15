import React, { useState } from "react";
import blogService from "../services/blogs";

function BlogForm({ blogs, setBlogs, setMessage }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  const handleBlogSubmit = async (event) => {
    event.preventDefault();
    try {
      const blog = await blogService.createBlog({ title, author, url });
      setBlogs(blogs.concat(blog));
      setTitle("");
      setAuthor("");
      setUrl("");
      setMessage({
        text: `a new blog ${blog.title} by ${blog.author} added`,
        type: "success",
      });
    } catch (err) {
      console.log("Couldn't submit blog: ", err);
    }
  };

  const blogForm = () => {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={handleBlogSubmit}>
          <div>
            title:
            <input
              type="text"
              value={title}
              name="Title"
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            author:
            <input
              type="text"
              value={author}
              name="Author"
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div>
            url:
            <input
              type="text"
              value={url}
              name="Url"
              onChange={({ target }) => setUrl(target.value)}
            />
          </div>
          <button type="submit">create</button>
          <button onClick={() => setShowComponent(false)}>cancel</button>
        </form>
      </div>
    );
  };

  return showComponent ? (
    blogForm()
  ) : (
    <button onClick={() => setShowComponent(true)}>new blog</button>
  );
}

export default BlogForm;
