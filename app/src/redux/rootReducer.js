import { combineReducers } from "@reduxjs/toolkit";
import userListReducer from "./userListSlice";
import chatReducer from "./chatSlice";
import lobbyReducer from "./lobbySlice";
import gameReducer from "./gameSlice";
import authReducer from "./authSlice";
import websocketReducer from "./websocketSlice";

const rootReducer = combineReducers({
  userList: userListReducer,
  chat: chatReducer,
  lobby: lobbyReducer,
  game: gameReducer,
  auth: authReducer,
  websocket: websocketReducer,
});

export default rootReducer;
