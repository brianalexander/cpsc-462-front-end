import { combineReducers } from "@reduxjs/toolkit";
import userListReducer from "./userListSlice";

const rootReducer = combineReducers({
  userList: userListReducer
});

export default rootReducer;
