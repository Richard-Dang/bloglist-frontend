import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";
import UserList from "./components/UserList";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "./reducers/loginReducer";
import { initializeBlogs } from "./reducers/blogReducer";
import { initializeUsers } from "./reducers/userReducer";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ loggedInUser }) => loggedInUser);

  useEffect(() => {
    dispatch(setLoggedInUser());
    const fetchBlogs = async () => dispatch(initializeBlogs());
    const fetchUsers = async () => dispatch(initializeUsers());
    fetchBlogs();
    fetchUsers();
  }, [dispatch]);

  return user ? (
    <div>
      <UserList />
      <BlogList />
    </div>
  ) : (
    <LoginForm />
  );
};

export default App;
