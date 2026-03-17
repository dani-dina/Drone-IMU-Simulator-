import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const container = document.getElementById("scene");

// UI elements
const axEl = document.getElementById("ax");
const ayEl = document.getElementById("ay");
const azEl = document.getElementById("az");
const gxEl = document.getElementById("gx");
const gyEl = document.getElementById("gy");
const gzEl = document.getElementById("gz");

// THREE.JS
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// WebSocket
const socket = new WebSocket("ws://localhost:3000");

socket.onmessage = (event) => {

  const values = event.data.split(",");

  const ax = parseFloat(values[0]);
  const ay = parseFloat(values[1]);
  const az = parseFloat(values[2]);
  const gx = parseFloat(values[3]);
  const gy = parseFloat(values[4]);
  const gz = parseFloat(values[5]);

  // update UI
  axEl.textContent = ax;
  ayEl.textContent = ay;
  azEl.textContent = az;

  gxEl.textContent = gx;
  gyEl.textContent = gy;
  gzEl.textContent = gz;

  // update cube
  cube.rotation.x = ax / 1000;
  cube.rotation.y = ay / 1000;
  cube.rotation.z = az / 1000;
};