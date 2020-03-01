// Redux Imports
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  games: []
};

const lobbySlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    refreshGames(state, action) {
      const { games } = action.payload;
      state.games = games;
    }
  }
});

export const { refreshGames } = lobbySlice.actions;
export default lobbySlice.reducer;
