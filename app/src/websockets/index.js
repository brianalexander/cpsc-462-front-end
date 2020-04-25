// Redux Imports
import store from "../redux/store";
import { addUser } from "../redux/userListSlice";
import { setStatus } from "../redux/websocketSlice";
import { addPublicMessage, addPrivateMessage } from "../redux/chatSlice";
import { refreshLobby } from "../redux/lobbySlice";
import { updateGame } from "../redux/gameSlice";

const registerWebSockets = (connectionURI = "ws://localhost:3000") => {
  socket = new WebSocket(connectionURI);

  socket.onopen = function (evt) {
    console.log(`Successfully connected to ${connectionURI}`);
    store.dispatch(setStatus(WebSocket.OPEN));
  };

  socket.onclose = function (evt) {
    console.log(`Disconnected.`);
    store.dispatch(setStatus(WebSocket.CLOSED));
  };

  socket.onmessage = ({ data }) => {
    const { type, payload } = JSON.parse(data);
    // console.log(type, payload);
    switch (type) {
      case "refresh-games":
        store.dispatch(refreshLobby(payload));
        break;
      case "game-state":
        console.log('GAME-STATE')
        store.dispatch(updateGame(payload));
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
