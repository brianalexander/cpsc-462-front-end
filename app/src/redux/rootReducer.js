import { combineReducers } from "@reduxjs/toolkit";
import userListReducer from "./userListSlice";
import chatReducer from "./chatSlice";

const rootReducer = combineReducers({
  userList: userListReducer,
  chat: chatReducer
});

export default rootReducer;
