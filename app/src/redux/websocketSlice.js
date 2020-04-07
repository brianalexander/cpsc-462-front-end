// Redux Imports
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  status: WebSocket.CLOSED,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    setStatus(state, action) {
      const status = action.payload;

      state.status = status;
    },
  },
});

export const { setStatus } = websocketSlice.actions;
export default websocketSlice.reducer;
