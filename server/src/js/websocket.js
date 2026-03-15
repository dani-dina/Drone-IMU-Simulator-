export function createSocket(callback) {

  const socket = new WebSocket("ws://localhost:3000");

  socket.onmessage = (event) => {
    callback(event.data);
  };

  return socket;
}