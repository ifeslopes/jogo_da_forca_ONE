
function play() {
  var audio = new Audio('midia/jogoplay.mp3');
  audio.loop=true;
  audio.volume = 0.50;
  audio.play();
  return audio;
}
function derrota() {
  var audio = new Audio('midia/derrota.mp3');
  audio.play();
  return audio;
}
function vitoria() {
  var audio = new Audio('midia/vitoria.mp3');
  audio.play();
  return audio;
}
function acerto() {
  var audio = new Audio('midia/acerto.mp3');
  audio.play();
  
  return audio;
}
function erro() {
  var audio = new Audio('midia/erro.mp3');
  audio.play();
  
  return audio;
}
