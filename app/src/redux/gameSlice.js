// Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

// export const createTicTacToeGame = createAsyncThunk(
//   "games/createTicTacToe",
//   async (game, thunkAPI) => {
//     const response = await axios.post("http://localhost:3000/tictactoe", game);
//     // const response = await TicTacToeAPI.createTicTacToeGame();

//     return response.data;
//   }
// );

let initialState = { state: null };

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // addGame: (state, action) => {
    //   const { id, game } = action.payload;
    //   state = game;
    // },
    updateGame: (state, action) => {
      const { id, game } = action.payload;
      console.log(action.payload);
      console.log("GAME", game);
      state.state = game;
      console.log("GAMESTATE", state);
    },
    resetGame: (state, action) => {
      state = { state: null };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(createTicTacToeGame.fulfilled, (state, action) => {
  //     console.log("createTicTacToeGame.fulfilled", action);
  //     const { id } = action.payload;
  //     state.games[id] = action.payload;
  //   });
  //   builder.addCase(createTicTacToeGame.pending, (state, action) => {
  //     // TODO: show spinner in modal
  //     console.log("pending");
  //   });
  //   builder.addCase(createTicTacToeGame.rejected, (state, action) => {
  //     console.log("rejected");
  //     // TODO: hide spinner
  //     // TODO: show error message
  //   });
  // },
});

export const { resetGame, updateGame } = gameSlice.actions;
export default gameSlice.reducer;
