// React Imports
import React from "react";
import UserItem from "./UserItem";

// Redux Imports
import { connect } from "react-redux";

// Assets
import "./UserList.css";

const UserList = props => {
  const useritems = props.users.map((user, index) => {
    return <UserItem id={user} key={index} />;
  });

  return <ul id="userlist">{useritems}</ul>;
};

const mapStateToProps = state => {
  return {
    users: state.userList.users
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
