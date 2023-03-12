const audioName = ["champion", "mon", "samurai", "villan"];

const thumbnailImg = document.querySelector("#imgBox");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const audioHtmlName = document.querySelector("#audioHtmlName");

var playing = false;
var audioNum = 2;
var audioPlaying = document.getElementById("myAudio");

function changedAudio() {
  thumbnailImg.src = `audios/${audioName[audioNum]}.jpg`;
  audioPlaying.src = `audios/${audioName[audioNum]}.mp3`;
  audioHtmlName.innerHTML = audioName[audioNum]
  if(playing){
    audioPlaying.play()
  }
}

play.addEventListener("click", (e) => {
    console.log("play")
  if (playing) {
    audioPlaying.pause();
    playing = false;
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
} else {
    audioPlaying.play();
    playing = true;
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
  }
});

leftBtn.addEventListener("click", (e) => {
    audioNum--;
    if(audioNum < 0){
        audioNum = audioName.length - 1;
    }
    changedAudio();
});

rightBtn.addEventListener("click", (e) => {
    audioNum++;
    if(audioNum > audioName.length -1 ){
        audioNum = 0;
    }
    changedAudio();
});

changedAudio()
