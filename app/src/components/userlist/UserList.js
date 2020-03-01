// React Imports
import React from "react";
import UserItem from "./UserItem";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "./redux/rootReducer";
// import { addUser, removeUser } from "./redux/userListSlice";

// Assets
import "./UserList.css";

function UserList(props) {
  // const dispatch = useDispatch();
  const { users } = useSelector(state => state.userList);

  const useritems = users.map(user => {
    return <UserItem id={user.id} />;
  });

  return <ul id="userlist">{useritems}</ul>;
}

export default UserList;
