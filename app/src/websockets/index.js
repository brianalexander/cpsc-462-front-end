// Redux Imports
import store from "../redux/store";
import { setStatus } from "../redux/websocketSlice";
import { updateGame } from "../redux/gameSlice";
import { setUserFromJwt } from "../redux/authSlice";

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
      case "game-state":
        console.log("websocket", "game-state");
        store.dispatch(updateGame(payload));
        break;
      case "connect-game-response":
        console.log("websocket", "connect-game-response");
        store.dispatch(setUserFromJwt(payload.jwt));
        break;
      default:
        break;
    }
  };
};

export let socket;
export default registerWebSockets;
