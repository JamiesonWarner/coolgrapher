window.onload = function() {
  var el = document.querySelector("#coolbox");

  var scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, .1, 1000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(el.clientWidth, el.clientHeight);
  el.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1),
      material = new THREE.MeshBasicMaterial({ color: 0x00FF00 }),
      cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 4;

  function render() {
    requestAnimationFrame(render); // render loop
    renderer.render(scene, camera);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1
  }
  render();
}
