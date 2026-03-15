import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

let cube;

export function initScene(container) {

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();

  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}

export function updateRotation(x, y, z) {

  cube.rotation.x = x;
  cube.rotation.y = y;
  cube.rotation.z = z;
}