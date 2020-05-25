import React from "react";
import { useDispatch } from "react-redux";
import Notification from "../components/Notification";
import { setNotification } from "../reducers/notificationReducer";
import { loginUser } from "../reducers/userReducer";
import useField from "../hooks/useField";

function LoginForm() {
  const dispatch = useDispatch();
  const { reset: resetUsername, ...usernameInput } = useField("text");
  const { reset: resetPassword, ...passwordInput } = useField("text");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      dispatch(
        loginUser({
          username: usernameInput.value,
          password: passwordInput.value,
        })
      );
      resetUsername();
      resetPassword();
    } catch (err) {
      console.log("Wrong credentials: ", err.response.data);
      dispatch(
        setNotification({
          text: "wrong username or password",
          type: "error",
        })
      );
    }
  };

  return (
    <div>
      <h2>log in to application</h2>
      <Notification />
      <form onSubmit={handleLogin}>
        <div>
          username
          <input id="username" {...usernameInput} />
        </div>
        <div>
          password
          <input id="password" {...passwordInput} />
        </div>
        <button type="submit" id="login-button">
          login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
