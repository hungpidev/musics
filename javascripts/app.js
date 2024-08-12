import { musics } from "./musicData.js";
const song = document.querySelector(".music__song");
const playBtn = document.querySelector(".btn__play");
const nextBtn = document.querySelector(".btn__next");
const prevBtn = document.querySelector(".btn__prev");
const currentTimer = document.querySelector(".music__current");
const durationTimer = document.querySelector(".music__duration");
const rangeBar = document.querySelector(".music__range");
const track = document.querySelector(".music__track");
const musicThumbnail = document.querySelector(".music__thumb");
const thumbAction = document.querySelector(".thumb__action");
const musicName = document.querySelector(".music__name");
const musicSinger = document.querySelector(".music__singer");
const repeatBtn = document.querySelector(".btn__repeat");
const randomBtn = document.querySelector(".btn__random");
const playList = document.querySelector(".playlist");
const muted = document.querySelector(".volume__muted");
const volumeBar = document.querySelector(".volume__input");
const volumeTrack = document.querySelector(".volume__track");
const volumeUp = document.querySelector(".volume__up");
const volumeDown = document.querySelector(".volume__down");
const volumeValue = document.querySelector(".volume__value");
const spinning = {
  transform: "rotate(360deg)",
};
const timing = {
  duration: 20000,
  iterations: Infinity,
  delay: 2000,
};
const musicThumbAnimate = musicThumbnail.animate(spinning, timing);

let playedSong = [];
let indexSong = 0;
let isPlaying = true;
let isMuted = false;
let unmuteVolume;
let isRepeat = false;
let isRandom = false;
let timeVolumeValue;
let isDragging = false;

const playlistIcon = document.querySelector(".playlist__icon");
const playlistClose = document.querySelector(".playlist__close");
const playlist = document.querySelector(".playlist");

playlistClose.classList.add("hidden");

function showPlaylist() {
  playlist.classList.remove("playlist-hide");
  playlist.classList.add("playlist-show");

  playlistIcon.classList.add("fade-out");
  playlistIcon.classList.remove("fade-in");

  setTimeout(() => {
    playlistIcon.classList.add("hidden");
    playlistClose.classList.remove("hidden");
    playlistClose.classList.add("fade-in");
    playlistClose.classList.remove("fade-out");
  }, 500);
}

function hidePlaylist() {
  playlist.classList.remove("playlist-show");
  playlist.classList.add("playlist-hide");

  playlistClose.classList.remove("fade-in");
  playlistClose.classList.add("fade-out");

  setTimeout(() => {
    playlistClose.classList.add("hidden");
    playlistIcon.classList.remove("hidden");
    playlistIcon.classList.remove("fade-out");
    playlistIcon.classList.add("fade-in");
  }, 500);
}

playlistIcon.addEventListener("click", showPlaylist);
playlistClose.addEventListener("click", hidePlaylist);

function initSong() {
  musicThumbAnimate.pause();
  song.setAttribute("src", `${musics[indexSong].path}`);
  musicName.textContent = musics[indexSong].name;
  musicSinger.textContent = musics[indexSong].singer;
  musicThumbnail.innerHTML = `
      <img src="${musics[indexSong].image}" draggable="false">
      `;
  song.volume = volumeBar.value / 100;
  volumeTrack.style.width = `${volumeBar.value}%`;
  if (isMuted) {
    muted.innerHTML = `<i class="fa-solid fa-volume-xmark muted"></i>`;
  } else {
    muted.innerHTML = `<i class="fa-solid fa-volume-high unmute"></i>`;
  }

  song.addEventListener("loadedmetadata", () => {
    rangeBar.max = song.duration;
  });
  updateSong();
}
initSong();

randomBtn.addEventListener("click", playRandomSong);
function playRandomSong() {
  if (isRepeat) {
    isRepeat = false;
    repeatBtn.classList.toggle("active");
  }
  if (isRandom) {
    isRandom = false;
  } else {
    isRandom = true;
  }
  randomBtn.classList.toggle("active");
}

repeatBtn.addEventListener("click", playRepeatSong);
function playRepeatSong() {
  if (isRandom) {
    isRandom = false;
    randomBtn.classList.toggle("active");
  }
  if (isRepeat) {
    isRepeat = false;
  } else {
    isRepeat = true;
  }
  repeatBtn.classList.toggle("active");
}

nextBtn.addEventListener("click", nextSong);
function nextSong() {
  if (isRandom) {
    isPlaying = true;
    loadCurrentSong(handleRandomSong());
    playAndPauseMusic();
  } else {
    changeSong("next");
  }
  musicThumbAnimate.cancel();
  activeSong();
  scrollToActiveSong();
}

prevBtn.addEventListener("click", prevSong);
function prevSong() {
  if (isRandom) {
    isPlaying = true;
    loadCurrentSong(handleRandomSong());
    playAndPauseMusic();
  } else {
    changeSong("prev");
  }
  musicThumbAnimate.cancel();
  activeSong();
  scrollToActiveSong();
}

function handleRandomSong() {
  playedSong.push(indexSong);
  let newIndexSong;
  do {
    newIndexSong = Math.floor(Math.random() * musics.length);
  } while (
    playedSong.includes(newIndexSong) &&
    playedSong.length < musics.length
  );
  if (playedSong.length === musics.length) {
    playedSong = [];
  }
  indexSong = newIndexSong;
  return indexSong;
}

function renderMusic() {
  playList.innerHTML = musics
    .map((song, index) => {
      return `
            <div class="playlist__song ${
              index === indexSong ? "song__active" : ""
            }" data-index="${index}">
              <div class="playlist__image">
                <img src="${song.image}" draggable="false">
              </div>
              <div class="playlist__body">
                <h3 class="playlist__title">${song.name}</h3>
                <p class="playlist__author">${song.singer}</p>
              </div>
              <div class="waves">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="playlist__option">
                <a href="${musics[index].path}" download="${
        musics[index].name
      }" class="playlist__option--load">Download
        <i class="fa-solid fa-download"></i>
        </a>
                <i class="fas fa-ellipsis-h icon__option"></i>
              </div>
            </div>
          `;
    })
    .join("");
}
renderMusic();

function optionSong() {
  const option = document.querySelectorAll(".playlist__option");
  const download = document.querySelectorAll(".playlist__option--load");
  option.forEach((optionE, optionIndex) => {
    optionE.addEventListener("click", handleDownload);
    function handleDownload(e) {
      download.forEach((downloadE, downloadIndex) => {
        downloadE.addEventListener("click", function (e) {
          e.stopPropagation();
        });

        window.addEventListener("click", function (e) {
          if (!e.target.matches(".playlist__option,.icon__option")) {
            downloadE.classList.remove("playlist__option--show");
          }
        });

        if (optionIndex === downloadIndex) {
          downloadE.classList.toggle("playlist__option--show");
        } else {
          downloadE.classList.remove("playlist__option--show");
        }
      });
    }
  });
}

optionSong();

function smoothScroll(selector, duration) {
  const viewportHeight = window.innerHeight;
  const heightElementSong = playList.firstElementChild.offsetHeight;
  const target = document.querySelector(selector);
  const targetPosition =
    target.getBoundingClientRect().top -
    viewportHeight / 2 +
    heightElementSong / 2;
  const startPositon = window.pageYOffset;
  let startTime = 0;
  function animation(currentTime) {
    if (startTime === 0) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const run = easeInOut(timeElapsed, startPositon, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  function easeInOut(t, b, c, d) {
    t = t / (d / 2);
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

function scrollToActiveSong() {
  setTimeout(() => {
    smoothScroll(".song__active", 2500);
  }, 300);
}

function wavesThumb() {
  if (isPlaying) {
    thumbAction.innerHTML = "";
    thumbAction.style.backgroundColor = "transparent";
  } else {
    thumbAction.innerHTML = `
      <div class="thumb__waves">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
    `;
    thumbAction.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  }
}

function activeSong() {
  const isActiveSong = document.querySelector(".song__active");
  const isActiveWaves = document.querySelector(".waves__active");
  if (isActiveSong) {
    isActiveSong.classList.remove("song__active");
  }
  if (isActiveWaves) {
    isActiveWaves.classList.remove("waves__active");
  }
  const activeSongs = document.querySelector(`div[data-index="${indexSong}"]`);
  activeSongs.classList.add("song__active");
  const activeWaves = document.querySelector(
    `div[data-index="${indexSong}"] .waves`
  );
  activeWaves.classList.add("waves__active");
}

playList.addEventListener("click", playSongWhenClick);
function playSongWhenClick(e) {
  const songNode = e.target.closest(".playlist__song:not(.song__active)");
  const optionNode = e.target.closest(".playlist__option");
  if (songNode && !optionNode) {
    indexSong = Number(songNode.getAttribute("data-index"));
    loadCurrentSong(indexSong);
    isPlaying = true;
    playAndPauseMusic();
    activeSong();
    musicThumbAnimate.cancel();
  }
}

function changeSong(direction) {
  if (direction === "next") {
    indexSong++;
    if (indexSong > musics.length - 1) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (direction === "prev") {
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }
  loadCurrentSong(indexSong);
  playAndPauseMusic();
}

function endedRepeatSong() {
  if (isRepeat) {
    isPlaying = true;
    playAndPauseMusic();
  } else {
    changeSong("next");
  }
}

function endedRandomSong() {
  if (isRandom) {
    isPlaying = true;
    loadCurrentSong(handleRandomSong());
    playAndPauseMusic();
  } else {
    changeSong("next");
  }
}

song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  if (isRepeat) {
    endedRepeatSong();
  } else if (isRandom) {
    endedRandomSong();
  } else {
    changeSong("next");
  }
  musicThumbAnimate.cancel();
  activeSong();
  scrollToActiveSong();
}

playBtn.addEventListener("click", playAndPauseMusic);
function playAndPauseMusic() {
  if (isPlaying) {
    const playPromise = song.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        playBtn.innerHTML = `
            <div class="btn__play--inner">
              <i class="fas fa-pause icon__pause"></i>
            </div>
          `;
        isPlaying = false;
        activeSong();
        musicThumbAnimate.play();
        console.warn("Click slowly");
      });
    }
  } else {
    song.pause();
  }
}

song.addEventListener("play", playSong);
function playSong() {
  playBtn.innerHTML = `
            <div class="btn__play--inner">
              <i class="fas fa-pause icon__pause"></i>
            </div>
          `;
  isPlaying = false;
  activeSong();
  musicThumbAnimate.play();
  wavesThumb();
}

song.addEventListener("pause", pauseSong);
function pauseSong() {
  const isActiveWaves = document.querySelector(".waves__active");
  if (isActiveWaves) {
    isActiveWaves.classList.remove("waves__active");
  }
  playBtn.innerHTML = `
    <div class="btn__play--inner">
    <i class="fas fa-play icon__play"></i>
    </div>
    `;
  isPlaying = true;
  musicThumbAnimate.pause();
  wavesThumb();
}
rangeBar.addEventListener("mousedown", function () {
  isDragging = true;
});

rangeBar.addEventListener("mouseup", function () {
  isDragging = false;
  song.currentTime = rangeBar.value;
});

rangeBar.addEventListener("touchstart", function () {
  isDragging = true;
});

rangeBar.addEventListener("touchend", function () {
  isDragging = false;
  song.currentTime = rangeBar.value;
});

rangeBar.addEventListener("input", function () {
  currentTimer.textContent = formatTimer(rangeBar.value);
  handleProgressBar();
});

song.addEventListener("timeupdate", updateSong);
function updateSong() {
  if (!isDragging) {
    currentTimer.textContent = formatTimer(song.currentTime);
    rangeBar.max = song.duration;
    rangeBar.value = song.currentTime;
    handleProgressBar();

    if (!song.duration) {
      durationTimer.textContent = `00:00`;
    } else {
      durationTimer.textContent = formatTimer(song.duration);
    }
  }
}

function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
function handleProgressBar() {
  track.style.width = `${(rangeBar.value / song.duration) * 100}%`;
}

function handleVolumeBar() {
  volumeTrack.style.width = `${volumeBar.value}%`;
}

muted.addEventListener("click", handleMuted);
function handleMuted() {
  if (isMuted) {
    muted.innerHTML = `<i class="fa-solid fa-volume-high unmute"></i>`;
    isMuted = false;
    volumeBar.value = unmuteVolume;
    song.volume = volumeBar.value / 100;
    if (song.volume === 0) {
      volumeBar.value = prevVolume;
      song.volume = volumeBar.value / 100;
    }
  } else {
    muted.innerHTML = `<i class="fa-solid fa-volume-xmark muted"></i>`;
    isMuted = true;
    volumeBar.value = 0;
    song.volume = 0;
  }
  handleVolumeBar();
  handleTimeVolume();
  handleVolumeValue();
}

function checkVolume() {
  if (song.volume === 0) {
    isMuted = true;
    muted.innerHTML = `<i class="fa-solid fa-volume-xmark muted"></i>`;
  } else {
    isMuted = false;
    muted.innerHTML = `<i class="fa-solid fa-volume-high unmute"></i>`;
  }
}

function handleVolumeValue() {
  volumeValue.innerHTML = `${volumeBar.value}%`;
}
handleVolumeValue();

function handleTimeVolume() {
  clearTimeout(timeVolumeValue);
  volumeValue.style.opacity = 1;
  volumeValue.style.visibility = "visible";
  timeVolumeValue = setTimeout(() => {
    volumeValue.style.opacity = 0;
    volumeValue.style.visibility = "hidden";
  }, 1000);
}

volumeBar.addEventListener("mousedown", function () {
  song.volume = volumeBar.value / 100;
  prevVolume = volumeBar.value;
});

volumeBar.addEventListener("input", handleChangeVolume);
function handleChangeVolume() {
  song.volume = volumeBar.value / 100;
  unmuteVolume = volumeBar.value;
  checkVolume();
  handleVolumeBar();
  handleTimeVolume();
  handleVolumeValue();
}

volumeDown.addEventListener("click", handleVolumeDown);
function handleVolumeDown() {
  while (volumeBar.value % 10 !== 0) {
    volumeBar.value++;
  }
  volumeBar.value = Number(volumeBar.value) - 10;
  song.volume = volumeBar.value / 100;
  unmuteVolume = volumeBar.value;
  checkVolume();
  handleVolumeBar();
  handleTimeVolume();
  handleVolumeValue();
}

volumeUp.addEventListener("click", handleVolumeUp);
function handleVolumeUp() {
  while (volumeBar.value % 10 !== 0) {
    volumeBar.value--;
  }
  volumeBar.value = Number(volumeBar.value) + 10;
  song.volume = volumeBar.value / 100;
  unmuteVolume = volumeBar.value;
  checkVolume();
  handleVolumeBar();
  handleTimeVolume();
  handleVolumeValue();
}

function loadCurrentSong(indexSong) {
  song.setAttribute("src", `${musics[indexSong].path}`);
  musicName.textContent = musics[indexSong].name;
  musicSinger.textContent = musics[indexSong].singer;
  musicThumbnail.innerHTML = `<img src="${musics[indexSong].image}" draggable="false">`;
}
