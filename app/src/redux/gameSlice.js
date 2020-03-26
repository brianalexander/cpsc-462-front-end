// Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import TicTacToeAPI from "../rest-api-calls/TicTacToeAPI";

export const createTicTacToeGame = createAsyncThunk(
  "games/createTicTacToe",
  async (args, thunkAPI) => {
    const response = await TicTacToeAPI.createTicTacToeGame();
    console.log(response);

    if (response !== 5) {
      return thunkAPI.rejectWithValue("Failed to create game.");
    }

    // console.log("returning")
    return { id: response };
  }
);

let initialState = {
  games: {}
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createTicTacToeGame.fulfilled, (state, action) => {
      console.log("createTicTacToeGame.fulfilled", action);
      const { id } = action.payload;
      // TODO: Add game information from action to state
    });
    builder.addCase(createTicTacToeGame.pending, (state, action) => {
      // TODO: show spinner in modal
      console.log("pending");
    });
    builder.addCase(createTicTacToeGame.rejected, (state, action) => {
      console.log("rejected");
      // TODO: hide spinner
      // TODO: show error message
    });
  }
});

export const { refreshGames } = gameSlice.actions;
export default gameSlice.reducer;
