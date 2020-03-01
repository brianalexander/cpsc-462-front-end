import { combineReducers } from "@reduxjs/toolkit";
import userListReducer from "./userListSlice";
import chatReducer from "./chatSlice";
import lobbyReducer from "./lobbySlice";

const rootReducer = combineReducers({
  userList: userListReducer,
  chat: chatReducer,
  lobby: lobbyReducer
});

export default rootReducer;
