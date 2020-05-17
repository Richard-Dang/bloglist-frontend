import React, { useState } from "react";
import loginService from "../services/login";
import Notification from "../components/Notification";

function LoginForm({ password, username, setUsername, setPassword, setUser }) {
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      setUsername("");
      setPassword("");
      window.localStorage.setItem("loggedInBlogUser", JSON.stringify(user));
    } catch (err) {
      console.log("Wrong credentials: ", err.response.data);
      setMessage({
        text: "wrong username or password",
        type: "error",
      });
    }
  };

  return (
    <div>
      <h2>log in to application</h2>
      <Notification message={message} />
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            id="username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            id="password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit" id="login-button">
          login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
