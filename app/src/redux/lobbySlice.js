// Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// React-router imports
import { Redirect } from "react-router";

//WebSocket Imports
import { socket } from "../websockets";
import { messageMaker } from "../websockets/functions";

let initialState = {
  games: []
};

const lobbySlice = createSlice({
  name: "lobby",
  initialState,
  reducers: {
    refreshLobby(state, action) {
      const { games } = action.payload;
      console.log(games);

      state.games = games;
    }
  }
});

export const { refreshLobby } = lobbySlice.actions;
export default lobbySlice.reducer;
