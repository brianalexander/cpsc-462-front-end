// Redux Imports
import store from "../redux/store";
import { addUser, removeUser } from "../redux/userListSlice";
import {
  addPublicMessage,
  addGameMessage,
  addPrivateMessage
} from "../redux/chatSlice";
import { refreshLobby } from "../redux/lobbySlice";

const registerWebSockets = (connectionURI = "ws://localhost:3000") => {
  socket = new WebSocket(connectionURI);

  socket.onopen = function(evt) {
    console.log(`Successfully connected to ${connectionURI}`);
  };

  socket.onmessage = ({ data }) => {
    const { type, payload } = JSON.parse(data);
    // console.log(type, payload);
    switch (type) {
      case "refresh-games":
        store.dispatch(refreshLobby(payload));
        break;
      case "userlist":
        store.dispatch(addUser(payload));
        break;
      case "connected":
        {
          const { id } = payload;
          socket.id = id;
        }
        break;
      case "private":
        store.dispatch(addPrivateMessage(payload));
        break;
      case "public":
        store.dispatch(addPublicMessage(payload));
        break;
      default:
        break;
    }
  };
};

export let socket;
export default registerWebSockets;
