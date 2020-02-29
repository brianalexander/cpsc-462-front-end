import React from "react";
import "./UserItem.css";

function UserItem(props) {
  const { id } = props;
  return <li className="useritem">{id}</li>;
}

export default UserItem;
