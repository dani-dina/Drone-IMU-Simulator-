import express from "express";
import http from "http";
import { setupWebsocket } from "./websocket.js";
import { startSerial } from "./serial.js";

const app = express();
const server = http.createServer(app);

app.use(express.static("src"));

const wss = setupWebsocket(server);

startSerial((data) => {
  wss.clients.forEach(client => {
    if (client.readyState === 1) {
      client.send(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});