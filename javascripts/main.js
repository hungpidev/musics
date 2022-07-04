window.addEventListener("load", function () {
  const musics = [
    {
      name: "ONLY",
      singer: "이하이 (LeeHi)",
      path: "../music/only.mp3",
      image: "../images/only.jpg",
      id: 1,
    },
    {
      name: "I Love You 3000",
      singer: "Stephanie Poetri",
      path: "../music/i-love-you-3000.mp3",
      image: "../images/i-love-you-3000.jpg",
      id: 2,
    },
    {
      name: "Angel Baby",
      singer: "Troye Sivan",
      path: "../music/angel-baby.mp3",
      image: "../images/angel-baby.jpg",
      id: 3,
    },
    {
      name: "Em Đừng Đi",
      singer: "Sơn Tùng M-TP",
      path: "../music/Em-Dung-Di-Son-Tung-M-TP.mp3",
      image: "../images/em-dung-di.jpg",
      id: 4,
    },
    {
      name: "Làm Người Luôn Yêu Em",
      singer: "Sơn Tùng M-TP",
      path: "../music/Lam-Nguoi-Luon-Yeu-Em-Son-Tung-M-TP.mp3",
      image: "../images/Lam-Nguoi-Luon-Yeu-Em-Son-Tung-M-TP.jpg",
      id: 5,
    },
    {
      name: "Khuôn Mặt Đáng Thương",
      singer: "Sơn Tùng M-TP",
      path: "../music/khuon-mat-dang-thuong.mp3",
      image: "../images/khuon-mat-dang-thuong.jpg",
      id: 6,
    },
    {
      name: "Cơn Mưa Ngang Qua",
      singer: "Sơn Tùng M-TP",
      path: "../music/Con-Mua-Ngang-Qua-Son-Tung-M-TP.mp3",
      image: "../images/Con-Mua-Ngang-Qua-Son-Tung-M-TP.jpg",
      id: 7,
    },
    {
      name: "Nắng Ấm Xa Dần",
      singer: "Sơn Tùng M-TP",
      path: "../music/Nang-Am-Xa-Dan-Son-Tung-M-TP.mp3",
      image: "../images/Nang-Am-Xa-Dan-Son-Tung-M-TP.jpg",
      id: 8,
    },
    {
      name: "Lệ Anh Vẫn Rơi",
      singer: "Sơn Tùng M-TP",
      path: "../music/Le-Anh-Van-Roi-Son-Tung-M-TP.mp3",
      image: "../images/le-anh-van-roi-mtp.jpg",
      id: 9,
    },
    {
      name: "Cơn Mưa Ngang Qua (Part 3)",
      singer: "Sơn Tùng M-TP",
      path: "../music/Con-Mua-Ngang-Qua-Part-3-Son-Tung-M-TP.mp3",
      image: "../images/Con-Mua-Ngang-Qua-Part-3-Son-Tung-M-TP.jpg",
      id: 10,
    },
    {
      name: "Cơn Mưa Ngang Qua (Part 2)",
      singer: "Sơn Tùng M-TP",
      path: "../music/Con-Mua-Ngang-Qua-Part-2-Son-Tung-M-TP.mp3",
      image: "../images/Con-Mua-Ngang-Qua-Part-2-Son-Tung-M-TP.jpg",
      id: 11,
    },
    {
      name: "Em Không Cô Đơn",
      singer: "Kha",
      path: "../music/Em Không Cô Đơn.mp3",
      image: "../images/em-ko-co-don.jpg",
      id: 12,
    },
    {
      name: "Em Có Nghe",
      singer: "Kha",
      path: "../music/Em Có Nghe.mp3",
      image: "../images/em-có-nghe.jpg",
      id: 13,
    },
    {
      name: "Lời Yêu Ngây Dại",
      singer: "Kha",
      path: "../music/Lời Yêu Ngây Dại.mp3",
      image: "../images/Lời Yêu Ngây Dại.jpg",
      id: 14,
    },
    {
      name: "At My Worst",
      singer: "Pink Sweat",
      path: "../music/Pink Sweat  At My Worst Official Audio.mp3",
      image: "../images/At My Worst.jpg",
      id: 15,
    },
    {
      name: "THẰNG ĐIÊN",
      singer: "JUSTATEE x PHƯƠNG LY",
      path: "../music/THẰNG ĐIÊN.mp3",
      image: "../images/THẰNG ĐIÊN.jpg",
      id: 16,
    },
    {
      name: "Đã Lỡ Yêu Em Nhiều",
      singer: "JustaTee",
      path: "../music/JustaTee  Đã Lỡ Yêu Em Nhiều.mp3",
      image: "../images/Đã Lỡ Yêu Em Nhiều.jpg",
      id: 17,
    },
  ];
  const song = document.querySelector(".music__song");
  const playBtn = document.querySelector(".btn__play");
  const nextBtn = document.querySelector(".btn__next");
  const prevBtn = document.querySelector(".btn__prev");
  const currentTimer = document.querySelector(".music__current");
  const durationTimer = document.querySelector(".music__duration");
  const rangeBar = document.querySelector(".music__range");
  const track = document.querySelector(".music__track");
  const musicThumbnail = document.querySelector(".music__thumb");
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
    duration: 10000,
    iterations: Infinity,
  };
  const musicThumbAnimate = musicThumbnail.animate(spinning, timing);
  let playedSong = [];
  let indexSong = 0;
  let isPlaying = true;
  let isMuted = false;
  let accVolume;
  let isRepeat = false;
  let isRandom = false;
  let timeVolumeValue;
  // storage
  const musicPlayer = createStorage("music__player");
  const volumeMusic = createStorage("volume__music");
  const currentRandom = musicPlayer.get("isRandom");
  const currentRepeat = musicPlayer.get("isRepeat");
  const currentIndex = musicPlayer.get("indexSong");
  const currentMuted = volumeMusic.get("isMuted");
  const currentIconMuted = volumeMusic.get("iconMuted");
  const currentVolumeBar = volumeMusic.get("volumeBar");
  const currentAccVolume = volumeMusic.get("accVolume");
  const currentVolumeTrack = volumeMusic.get("volumeTrack");

  function localStorageMusic() {
    if (currentRandom) {
      isRandom = currentRandom;
      randomBtn.classList.toggle("active");
    }
    if (currentRepeat) {
      isRepeat = currentRepeat;
      repeatBtn.classList.toggle("active");
    }
    if (currentIndex) {
      indexSong = currentIndex;
    }
    if (currentVolumeTrack) {
      volumeTrack.style.width = currentVolumeTrack;
    }
    if (currentMuted) {
      isMuted = currentMuted;
    }
    if (currentIconMuted) {
      muted.innerHTML = currentIconMuted;
    }
    if (currentVolumeBar) {
      volumeBar.value = currentVolumeBar;
    }
    if (currentAccVolume) {
      accVolume = currentAccVolume;
    }
  }
  localStorageMusic();

  function createStorage(key) {
    const getValue = JSON.parse(localStorage.getItem(key)) ?? {};
    function setValue() {
      localStorage.setItem(key, JSON.stringify(getValue));
    }
    const storage = {
      get(key) {
        return getValue[key];
      },
      set(key, value) {
        getValue[key] = value;
        setValue();
      },
    };
    return storage;
  }

  function initSong() {
    musicThumbAnimate.pause();
    song.setAttribute("src", `${musics[indexSong].path}`);
    musicName.textContent = musics[indexSong].name;
    musicSinger.textContent = musics[indexSong].singer;
    musicThumbnail.innerHTML = `
      <img src="${musics[indexSong].image}" draggable="false">
      `;
    volumeBar.value = volumeBar.value;
    song.volume = volumeBar.value / 100;
    volumeTrack.style.width = `${volumeBar.value}%`;
  }
  initSong();

  randomBtn.addEventListener("click", playRandomSong);
  function playRandomSong() {
    if (isRepeat) {
      isRepeat = false;
      repeatBtn.classList.toggle("active");
      musicPlayer.set("isRepeat", isRepeat);
    }
    if (isRandom) {
      isRandom = false;
    } else {
      isRandom = true;
    }
    randomBtn.classList.toggle("active");
    musicPlayer.set("isRandom", isRandom);
  }

  repeatBtn.addEventListener("click", playRepeatSong);
  function playRepeatSong() {
    if (isRandom) {
      isRandom = false;
      randomBtn.classList.toggle("active");
      musicPlayer.set("isRandom", isRandom);
    }
    if (isRepeat) {
      isRepeat = false;
    } else {
      isRepeat = true;
    }
    repeatBtn.classList.toggle("active");
    musicPlayer.set("isRepeat", isRepeat);
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
    activeSong();
    scrollToActiveSong();
  }

  function handleRandomSong() {
    playedSong.push(indexSong);
    let newIndexSong;
    do {
      newIndexSong = Math.floor(Math.random() * musics.length);
    } while (playedSong.includes(newIndexSong) && playedSong.length < musics.length);
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
              <div class="playlist__option">
                <i class="fas fa-ellipsis-h icon__option"></i>
              </div>
            </div>
          `;
      })
      .join("");
  }
  renderMusic();

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
      const run = easeInOut(
        timeElapsed,
        startPositon,
        targetPosition,
        duration
      );
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

  function activeSong() {
    const isActiveSong = document.querySelector(".song__active");
    if (isActiveSong) {
      isActiveSong.classList.remove("song__active");
    }
    const activeSongs = document.querySelector(
      `div[data-index="${indexSong}"]`
    );
    activeSongs.classList.add("song__active");
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
    activeSong();
    scrollToActiveSong();
  }

  playBtn.addEventListener("click", playAndPauseMusic);
  function playAndPauseMusic() {
    if (isPlaying) {
      song.play();
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
    musicThumbAnimate.play();
  }

  song.addEventListener("pause", pauseSong);
  function pauseSong() {
    playBtn.innerHTML = `
    <div class="btn__play--inner">
    <i class="fas fa-play icon__play"></i>
    </div>
    `;
    isPlaying = true;
    musicThumbAnimate.pause();
  }

  rangeBar.addEventListener("change", handleChangeBar);
  function handleChangeBar() {
    song.currentTime = rangeBar.value;
    handleProgressBar();
    isPlaying = true;
    playAndPauseMusic();
  }

  rangeBar.addEventListener("input", handleInputBar);
  function handleInputBar() {
    song.currentTime = rangeBar.value;
    handleProgressBar();
    isPlaying = false;
    playAndPauseMusic();
  }

  function updateSong() {
    rangeBar.max = song.duration;
    rangeBar.value = song.currentTime;
    handleProgressBar();
    currentTimer.textContent = formatTimer(song.currentTime);
    if (!song.duration) {
      durationTimer.textContent = `00:00`;
    } else {
      durationTimer.textContent = formatTimer(song.duration);
    }
    requestAnimationFrame(updateSong);
  }
  requestAnimationFrame(updateSong);

  function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  function handleProgressBar() {
    track.style.width = `${(rangeBar.value / song.duration) * 100}%`;
  }

  function handleVolumeBar() {
    volumeTrack.style.width = `${volumeBar.value}%`;
    volumeMusic.set("volumeTrack", volumeTrack.style.width);
  }

  muted.addEventListener("click", handleMuted);
  function handleMuted() {
    if (isMuted) {
      muted.innerHTML = `<i class="fa-solid fa-volume-high unmute"></i>`;
      isMuted = false;
      volumeBar.value = accVolume;
      song.volume = volumeBar.value / 100;
    } else {
      muted.innerHTML = `<i class="fa-solid fa-volume-xmark muted"></i>`;
      isMuted = true;
      volumeBar.value = 0;
      song.volume = 0;
    }
    handleVolumeBar();
    handleTimeVolume();
    handleVolumeValue();
    volumeMusic.set("iconMuted", muted.innerHTML);
    volumeMusic.set("isMuted", isMuted);
    volumeMusic.set("volumeBar", volumeBar.value);
  }

  function checkVolume() {
    if (song.volume === 0) {
      isMuted = true;
      muted.innerHTML = `<i class="fa-solid fa-volume-xmark muted"></i>`;
    } else {
      isMuted = false;
      muted.innerHTML = `<i class="fa-solid fa-volume-high unmute"></i>`;
    }
    volumeMusic.set("isMuted", isMuted);
    volumeMusic.set("iconMuted", muted.innerHTML);
    volumeMusic.set("volumeBar", volumeBar.value);
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
    }, 2000);
  }

  volumeBar.addEventListener("input", handleChangeVolume);
  function handleChangeVolume() {
    song.volume = volumeBar.value / 100;
    accVolume = volumeBar.value;
    console.log(accVolume);
    checkVolume();
    handleVolumeBar();
    handleTimeVolume();
    handleVolumeValue();
    volumeMusic.set("accVolume", accVolume);
  }

  volumeDown.addEventListener("click", handleVolumeDown);
  function handleVolumeDown() {
    volumeBar.value = Number(volumeBar.value) - 5;
    song.volume = volumeBar.value / 100;
    accVolume = volumeBar.value;
    checkVolume();
    handleVolumeBar();
    handleTimeVolume();
    handleVolumeValue();
    volumeMusic.set("accVolume", accVolume);
  }

  volumeUp.addEventListener("click", handleVolumeUp);
  function handleVolumeUp() {
    volumeBar.value = Number(volumeBar.value) + 5;
    song.volume = volumeBar.value / 100;
    accVolume = volumeBar.value;
    checkVolume();
    handleVolumeBar();
    handleTimeVolume();
    handleVolumeValue();
    volumeMusic.set("accVolume", accVolume);
  }

  function loadCurrentSong(indexSong) {
    song.setAttribute("src", `${musics[indexSong].path}`);
    musicName.textContent = musics[indexSong].name;
    musicSinger.textContent = musics[indexSong].singer;
    musicThumbnail.innerHTML = `<img src="${musics[indexSong].image}" draggable="false">`;
    musicPlayer.set("indexSong", indexSong);
  }

  window.addEventListener("keydown", controlKeyboard);
  function controlKeyboard(e) {
    switch (e.key) {
      case "s":
        playAndPauseMusic();
        break;
      case " ":
        playAndPauseMusic();
        break;
      case "a":
        prevSong();
        break;
      case "d":
        nextSong();
        break;
      case "z":
        playRepeatSong();
        break;
      case "x":
        playRandomSong();
        break;
      case "ArrowRight":
        handleInputBar();
        handleChangeBar();
        song.currentTime = Number(rangeBar.value) + 2;
        break;
      case "ArrowLeft":
        handleInputBar();
        handleChangeBar();
        song.currentTime = Number(rangeBar.value) - 2;
        break;
      default:
        console.log(`
            Nhấn A để prev
            Nhấn D để next
            Nhấn S or Space để play or pause
            Nhấn Z để repeat
            Nhấn X để random
            Nhấn --> or <-- để tua music
          `);
    }
  }
});
