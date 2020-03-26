import { combineReducers } from "@reduxjs/toolkit";
import userListReducer from "./userListSlice";
import chatReducer from "./chatSlice";
import lobbyReducer from "./lobbySlice";
import gameReducer from "./gameSlice";

const rootReducer = combineReducers({
  userList: userListReducer,
  chat: chatReducer,
  lobby: lobbyReducer,
  game: gameReducer
});

export default rootReducer;
