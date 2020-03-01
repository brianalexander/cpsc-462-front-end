// Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// Socket Imports
// import { socket } from "../websockets";
// import {} from "../websockets/functions";

let initialState = {
  users: []
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser(state, action) {
      const { users } = action.payload;
      state.users = [...users];
    },
    removeUser(state, action) {
      const { user } = action.payload;
      state.users = state.users.splice(state.users.indexOf(user), 1);
    }
  }
});

export const { addUser, removeUser } = userListSlice.actions;
export default userListSlice.reducer;
