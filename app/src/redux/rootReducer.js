import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import authReducer from "./authSlice";
import websocketReducer from "./websocketSlice";

const rootReducer = combineReducers({
  game: gameReducer,
  auth: authReducer,
  websocket: websocketReducer,
});

export default rootReducer;
