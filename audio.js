var context = new AudioContext();
var audioElement = document.getElementById('player');
var analyser = context.createAnalyser();

audioElement.addEventListener('canplay', function() {
  var source = context.createMediaElementSource(audioElement);

  source.connect(analyser);
  analyser.connect(context.destination);
});

analyser.fftSize = 64;

var frequencyData = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(frequencyData);


// var stop = false;
// var frameCount = 0;
// var fps, fpsInterval, startTime, now, then, elapsed;

// startAnimating(8);

// function startAnimating(fps) {
//   fpsInterval = 1000 /fps;
//   then = Date.now();
//   startTime = then;
//   render();
// }
// function startAnimating(fps) {
//   render();
// }

function convertIntToHexColor(...rgb) {
  var hex = rgb.map((color) => color.toString(16)).join('');
  return `0x${hex}`;
}



function render() {
  requestAnimationFrame(render);

  analyser.getByteFrequencyData(frequencyData);

  if(frequencyData[0] !== 0) {
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
  }

  torus.scale.x = frequencyData[3] / 100
  torus.scale.y = frequencyData[5] / 100
  torus.scale.z = frequencyData[7] / 100

  torus.material.color.setHex(convertIntToHexColor(frequencyData[8], frequencyData[24], frequencyData[31]));
  renderer.render(scene, camera);
}
render();
