// Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

// function timeout(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// export const registerUser = createAsyncThunk(
//   "user/registerUser",
//   async (user, thunkAPI) => {
//     const response = await axios.post("http://localhost:3000/user", user);
//     return response.data;
//   }
// );

let initialState = { jwt: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserFromJwt(state, action) {
      const { exp, data } = jwtDecode(action.payload);
      state.user = data.user;
      state.exp = exp;
      state.jwt = action.payload;
    },
  },
  // extraReducers: {
  //   [registerUser.fulfilled]: (state, action) => {
  //     const { exp, data } = jwtDecode(action.payload);

  //     state.user = data.username;
  //     state.exp = exp;
  //     state.jwt = action.payload;
  //   },
  //   [registerUser.pending]: (state, action) => {
  //     console.log("PENDING");
  //   },
  //   [registerUser.rejected]: (state, action) => {
  //     console.log("ERROR");
  //   },
  // },
});

export const { setUserFromJwt } = authSlice.actions;
export default authSlice.reducer;
