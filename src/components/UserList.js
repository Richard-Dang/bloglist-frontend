import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users);
  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Blogs Created</th>
          </tr>
        </thead>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </table>
    </div>
  );
};

export default UserList;
