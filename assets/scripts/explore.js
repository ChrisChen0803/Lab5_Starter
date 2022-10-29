// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  let voices;
  const voiceSelect = document.getElementById("voice-select");
  const inputTxt = document.getElementById("text-to-speak");
  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
  
      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  });
  const smileImg = document.querySelector("img");
  let utterThis=new SpeechSynthesisUtterance(inputTxt.value);
  addEventListener('change', (event) => {
  utterThis= new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  utterThis.voice = voices.find((v) => v.name === selectedOption);
  });
  const press = document.querySelector("button");
  press.addEventListener("click", () => {
    smileImg.src="assets/images/smiling-open.png";
    synth.speak(utterThis);
    utterThis.addEventListener('end', (event) => {
      smileImg.src="assets/images/smiling.png";
    });
  });
  

  
}


  
