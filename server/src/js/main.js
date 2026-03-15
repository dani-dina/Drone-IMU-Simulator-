import { initScene, updateRotation } from "./threeScene.js";
import { createSocket } from "./websocket.js";

const container = document.getElementById("scene");

initScene(container);

createSocket((data) => {

  const values = data.split(",");

  const ax = parseFloat(values[0]);
  const ay = parseFloat(values[1]);
  const az = parseFloat(values[2]);

  updateRotation(ax / 1000, ay / 1000, az / 1000);

});