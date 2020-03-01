import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../websockets";
import { messageMaker } from "../websockets/functions";

let initialState = {
  public: [], // [{sender:"username", timestamp: 123, text: "Hey"},]
  private: {}, // {sender: [{timestamp: 123, text: "how are you?"}, {timestamp: 123, text: "how are you?"}]}
  game: [] // [{sender:"username", timestamp: 123, text: "Hey"},]
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendPublicMessage(state, action) {
      const { text } = action.payload;
      socket.send(messageMaker("public", { text }));
    },
    addPublicMessage(state, action) {
      const { sender, text } = action.payload;
      state.public = [{ sender, timestamp: Date.now(), text }, ...state.public];
    },
    sendGameMessage(state, action) {},
    addGameMessage(state, action) {
      const { sender, text } = action.payload;
      state.game = [{ sender, timestamp: Date.now(), text }, ...state.public];
    },
    sendPrivateMessage(state, action) {
      const { target, text } = action.payload;
      socket.send(messageMaker("public", { target, text }));
    },
    addPrivateMessage(state, action) {
      const { sender, text } = action.payload;
      state.private = {
        ...state.private,
        [sender]: [
          { sender, timestamp: Date.now(), text },
          ...state.private[sender]
        ]
      };
    }
  }
});

export const {
  addPublicMessage,
  addGameMessage,
  addPrivateMessage,
  sendPublicMessage,
  sendGameMessage,
  sendPrivateMessage
} = chatSlice.actions;
export default chatSlice.reducer;
