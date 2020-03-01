export function sendPublicMessage(socket, text) {
  const message = messageMaker("public", { text });
  sendMessageToServer(socket, message);
}

export function sendPrivateMessage(socket, target, text) {
  const message = messageMaker("private", { target, text });
  sendMessageToServer(socket, message);
}

export function sendMessageToServer(socket, message) {
  socket.send(message);
}

export function messageMaker(type, payload) {
  return JSON.stringify({ type, payload });
}

// export function sendPublicMessage(socket, text) {
//   const message = messageMaker("public", { text });
//   sendMessageToServer(socket, message);
//   addPublicMessage(Date.now(), socket.id, text);
// }

// export function sendPrivateMessage(socket, target, text) {
//   const message = messageMaker("private", { target, text });
//   sendMessageToServer(socket, message);
//   addPrivateMessage(Date.now(), socket.id, text);
// }
