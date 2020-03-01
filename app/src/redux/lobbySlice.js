// Redux Imports
import { createSlice } from "@reduxjs/toolkit";

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
    refreshGames(state, action) {
      const { games } = action.payload;
      console.log(games);

      state.games = games;
    },
    createGame(state, action) {
      const { name } = action.payload;
      socket.send(messageMaker("create-game", { name, public: true }));
    }
  }
});

export const { refreshGames, createGame } = lobbySlice.actions;
export default lobbySlice.reducer;
