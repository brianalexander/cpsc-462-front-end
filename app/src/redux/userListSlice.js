import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState = {
  users: [{id:"one"},{id:"two"},{id:"three"}]
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser(state, action) {
      const { user } = action.payload;
      state.users = [...state.users, user];
    },
    removeUser(state, action) {
      const { user } = action.payload;
      state.users = state.users.splice(state.users.indexOf(user), 1);
    }
  }
});

export const { addUser, removeUser } = userListSlice;
export default userListSlice.reducer;
