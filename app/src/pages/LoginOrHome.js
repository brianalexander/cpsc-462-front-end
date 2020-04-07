// React Imports
import React, { useState } from "react";

// Redux Imports
import { connect, useDispatch } from "react-redux";

// Auth Imports
import { isValidAndAuthorized } from "../auth";

import Home from "./Home";
import LoginPage from "./LoginPage";

const LandingPage = ({ auth }) => {
  if (isValidAndAuthorized(auth.jwt, Date.now())) {
    return <Home />;
  } else {
    return <LoginPage />;
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
