import store from "../redux/store";
import { addUser, removeUser } from "../redux/userListSlice";

const registerWebSockets = (connectionURI = "ws://localhost:3000") => {
  socket = new WebSocket(connectionURI);

  socket.onopen = function(evt) {
    console.log(`Successfully connected to ${connectionURI}`);
  };

  socket.onmessage = ({ data }) => {
    const { type, payload } = JSON.parse(data);
    // console.log(type, payload);
    switch (type) {
      case "userlist":
        {
          store.dispatch(addUser(payload));
        }
        break;
      case "connected":
        {
          const { id } = payload;
          socket.id = id;
          // document.getElementById("text").disabled = false;
          // document.getElementById("send").disabled = false;
        }
        break;
      case "private":
        {
          const { sender, text } = payload;
          // addPrivateMessage(Date.now(), sender, text);
        }
        break;
      case "public":
        {
          const { sender, text } = payload;
          // addPublicMessage(Date.now(), sender, text);
        }
        break;
    }
  };
};

export let socket;
export default registerWebSockets;
