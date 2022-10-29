// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  addEventListener('change', (event) => {
  const hornkind = document.getElementById("horn-select");
  const kind = document.querySelector("img");
  const hornAudio = document.querySelector("audio");
  switch(hornkind.value){
    case "air-horn":
      kind.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
      break;
    case "car-horn":
      kind.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
      break;
    case "party-horn":
      kind.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
      break;
    default:
      kind.src="assets/images/no-image.png";
      hornAudio.src=null;
  }
  });
  document.querySelector("button").addEventListener("click", playAudio);
  const vol = document.querySelector("input");
  const volume = document.querySelector("#volume-controls");
  const icon = volume.querySelector("img");
  addEventListener('change', (event) => {
    document.querySelector("audio").volume=(vol.value/100);
    if(vol.value==0){
      icon.src="assets/icons/volume-level-0.svg";
    }
    else if(vol.value<33){
      icon.src="assets/icons/volume-level-1.svg";
    }
    else if(vol.value>32&&vol.value<67){
      icon.src="assets/icons/volume-level-2.svg";
    }
    else if(vol.value>66){
      icon.src="assets/icons/volume-level-3.svg";
    }
  });
  
  
}
function playAudio(){
  document.querySelector("audio").play();
  if(document.getElementById("horn-select").value==="party-horn"){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}



