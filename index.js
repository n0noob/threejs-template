import * as THREE from 'three';
import {
  initThree,
  resizeRendererToDisplaySize,
  getDefaultCube,
  getDefaultLight
} from './threejs-helper';


let renderer, camera, scene;

const objects = [];

const main = () => {

  let canvas = document.getElementById('canvas');

  let threeStuff = initThree(canvas);
  renderer = threeStuff.renderer;
  camera = threeStuff.camera;
  
  scene = new THREE.Scene();

  scene.add(getDefaultLight());

  let cube = getDefaultCube();
  objects.push(cube);
  scene.add(cube);

  animate();
}

const animate = (time) => {
  time *= 0.001;
  
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  objects.forEach((obj) => {
    obj.rotation.y = time;
  });

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}


main();