var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusGeometry(13, 3, 80, 100);
var material = new THREE.MeshBasicMaterial({color: 0x3192ed, wireframe: true});
var torus = new THREE.Mesh(geometry, material);

scene.add(torus);

camera.position.z = 75;
