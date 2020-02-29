import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";

function UserList(props) {
  const { users } = props;

  const useritems = users.map(user => {
    return <UserItem id={user.id} />;
  });

  return <ul id="userlist">{useritems}</ul>;
}

export default UserList;
