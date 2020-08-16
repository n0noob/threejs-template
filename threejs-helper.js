import * as THREE from 'three';

export const initThree = (canvas) => {
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  return {
    renderer: renderer,
    camera: camera
  }
}

export const resizeRendererToDisplaySize = (renderer) => {
  const canvas = renderer.domElement;
  
  const pixelRatio = window.devicePixelRatio;

  const width = canvas.clientWidth * pixelRatio | 0;
  const height = canvas.clientHeight;

  const needResize = canvas.width !== width || canvas.height !== height;

  if(needResize) {
    renderer.setSize(width, height, false);
  }

  return needResize;
}

export const getDefaultCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
  return new THREE.Mesh(geometry, material);
}

export const getDefaultLight = () => {
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);

  return light;
}
