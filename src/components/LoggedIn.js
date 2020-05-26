import React from "react";
import Notification from "../components/Notification";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/loginReducer";
import { useHistory } from "react-router-dom";

const LoggedIn = ({ loggedInUser }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    history.push("/");
    dispatch(logoutUser());
  };
  return loggedInUser ? (
    <div>
      <h2>Blogs</h2>
      <Notification />
      <p>{loggedInUser.name} has logged in</p>
      <button onClick={handleLogOut}>logout</button>
    </div>
  ) : null;
};

export default LoggedIn;
