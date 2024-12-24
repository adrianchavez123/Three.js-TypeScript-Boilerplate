import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import "./style.css";

const scene = new THREE.Scene();

new RGBELoader().load("img/venice_sunset_1k.hdr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
  scene.backgroundBlurriness = 1.0;
});

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(2, 1, -2);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.y = 0.75;
controls.enableDamping = true;

const loader = new GLTFLoader();
let suvBody: THREE.Object3D;
await loader.loadAsync("models/suv_body.glb").then((gltf) => {
  suvBody = gltf.scene;
});
await loader.loadAsync("models/suv_wheel.glb").then((gltf) => {
  const wheels = [
    gltf.scene,
    gltf.scene.clone(),
    gltf.scene.clone(),
    gltf.scene.clone(),
  ];
  wheels[0].position.set(-0.65, 0.2, -0.77);
  wheels[1].position.set(0.65, 0.2, -0.77);
  wheels[1].rotateY(Math.PI);
  wheels[2].position.set(-0.65, 0.2, 0.57);
  wheels[3].position.set(0.65, 0.2, 0.57);
  wheels[3].rotateY(Math.PI);
  suvBody.add(...wheels);
  scene.add(suvBody);
});

const stats = new Stats();
document.body.appendChild(stats.dom);

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);

  stats.update();
}

animate();
