import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/userReducer";
import { initializeBlogs } from "./reducers/blogReducer";
import blogReducer from "./reducers/blogReducer";
console.log("blogReducerApp", blogReducer);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    dispatch(setUser());
    const fetchBlogs = async () => dispatch(initializeBlogs());
    fetchBlogs();
  }, [dispatch]);

  return user ? <BlogList /> : <LoginForm />;
};

export default App;
