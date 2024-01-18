const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlsicon = document.getElementById("ctrlIcon");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const musicImg = document.querySelector(".music-img");
const songTitle = document.querySelector("h1");
const artistName = document.querySelector("p");

const songs = [
  {
    title: "Le Monde",
    artist: "Richard Carter",
    image: "Media/girl-5909741_640 (1).png",
    file: "Media/Richard Carter - Le Monde.mp3",
  },
  {
    title: "ASTITVA",
    artist: "RT SYANGTAN",
    image: "Media/RT.jpg",
    file: "Media/ASTITVA  RT SYANGTAN  Lyric video.mp3",
  },
  {
    title: "We Are",
    artist: "Jo Cohen",
    image: "Media/girl-5909741_640 (1).png",
    file: "Media/Jo Cohen  Sex Whales  We Are NCS Release.mp3",
  },
];
let currentSongIndex = 0;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

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

setInterval(() => {
  progress.value = song.currentTime;
}, 500);

progress.oninput = function () {
  song.currentTime = progress.value;
};

song.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
});

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong();
}

nextBtn.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
});

function loadSong() {
  const currentSong = songs[currentSongIndex];
  song.src = currentSong.file;
  song.load();
  song.play();
  controlsicon.classList.add("fa-pause");
  controlsicon.classList.remove("fa-play");
  musicImg.src = currentSong.image;
  songTitle.textContent = currentSong.title;
  artistName.textContent = currentSong.artist;
}
