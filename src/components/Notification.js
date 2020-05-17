import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message: { text, type } }) => {
  const notificationStyle = {
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const typeStyle = type === "error" ? { color: "red" } : { color: "green" };

  return text ? (
    <div style={{ ...notificationStyle, ...typeStyle }} class="notification">
      {text}
    </div>
  ) : null;
};

Notification.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Notification;
