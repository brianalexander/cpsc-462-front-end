// React Imports
import React from "react";
import UserItem from "./UserItem";

// Redux Imports
import { useSelector } from "react-redux";
// import { addUser, removeUser } from "./redux/userListSlice";

// Assets
import "./UserList.css";

function UserList(props) {
  const { users } = useSelector(state => state.userList);
  console.log("USERLIST", users);

  const useritems = users.map(user => {
    return <UserItem id={user} />;
  });

  return <ul id="userlist">{useritems}</ul>;
}

export default UserList;
