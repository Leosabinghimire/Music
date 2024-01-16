const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlsicon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Play & pause
function playPause() {
  if (controlsicon.classList.contains("fa-pause")) {
    song.pause();
    controlsicon.classList.remove("fa-pause");
    controlsicon.classList.add("fa-play");
  } else {
    song.play();
    controlsicon.classList.add("fa-pause");
    controlsicon.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  controlsicon.classList.add("fa-pause");
  controlsicon.classList.remove("fa-play");
};
