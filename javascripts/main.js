window.addEventListener("load", function () {
  const musics = [
    {
      name: "Angel Baby",
      singer: "Troye Sivan",
      path: "audios/angel-baby.mp3",
      image: "images/angel-baby.jpg",
      id: 1,
    },
    {
      name: "Head In The Clouds",
      singer: "Hayd",
      path: "audios/Head In the Clouds - Hayd.mp3",
      image: "images/Head In the Clouds.jpg",
      id: 2,
    },
    {
      name: "Under The Influence",
      singer: "Chris Brown",
      path: "audios/UnderTheInfluence-ChrisBrown.mp3",
      image: "images/UnderTheInfluence.webp",
      id: 3,
    },
    {
      name: "Paris in the Rain",
      singer: "Lauv",
      path: "audios/Paris In The Rain - Lauv.mp3",
      image: "images/Paris in the Rain.webp",
      id: 4,
    },
    {
      name: "Beautiful",
      singer: "Bazzi feat. Camila Cabello",
      path: "audios/Beautiful - Bazzi_ Camila Cabello.mp3",
      image:
        "images/Bazzi feat. Camila Cabello - Beautiful.jpg",
      id: 5,
    },
    {
      name: "I Fucking Love You",
      singer: "Bazzi",
      path: "audios/Ifly-Bazzi.mp3",
      image: "images/I.F.L.Y.jpg",
      id: 6,
    },
    {
      name: "Solo",
      singer: "Clean Bandit feat. Demi Lovato",
      path: "audios/SoloFeatDemiLovato-CleanBandit.mp3",
      image: "images/Clean Bandit - Solo.jpg",
      id: 7,
    },
    {
      name: "Night Changes",
      singer: "One Direction",
      path: "audios/NightChanges-OneDirection.mp3",
      image: "images/One Direction - Night Changes.jpg",
      id: 8,
    },
    {
      name: "Right Now (Na Na Na)",
      singer: "Akon",
      path: "audios/Right now Na Na Na_ - Akon.mp3",
      image: "images/Akon - Right Now (Na Na Na).jpg",
      id: 9,
    },
    {
      name: "Real Friends",
      singer: "Camila Cabello",
      path: "audios/RealFriends-CamilaCabello.mp3",
      image: "images/Camila Cabello - Real Friends.jpg",
      id: 10,
    },
    {
      name: "Dusk Till Dawn",
      singer: "ZAYN ft. Sia",
      path: "audios/DuskTillDawn-ZaynSia.mp3",
      image:
        "images/ZAYN - Dusk Till Dawn (Official Video) ft. Sia.jpg",
      id: 11,
    },
    {
      name: "Broken Angel",
      singer: "Arash feat. Helena",
      path: "audios/Broken Angel - Arash_ Helena.mp3",
      image: "images/Arash feat. Helena - Broken Angel.jpg",
      id: 12,
    },
    {
      name: "Without Me",
      singer: "Halsey",
      path: "audios/Without Me - Halsey.mp3",
      image: "images/Halsey - Without Me.jpg",
      id: 13,
    },
    {
      name: "Never Be the Same",
      singer: "Camila Cabello",
      path: "audios/Never Be The Same - Camila Cabello.mp3",
      image:
        "images/Camila Cabello - Never Be the Same.jpg",
      id: 14,
    },
    {
      name: "Attention",
      singer: "Charlie Puth",
      path: "audios/Attention - Charlie Puth.mp3",
      image: "images/Charlie Puth - Attention.jpg",
      id: 15,
    },
    {
      name: "As It Was",
      singer: "Harry Styles",
      path: "audios/As It Was - Harry Styles.mp3",
      image: "images/Harry Styles - As It Was.jpg",
      id: 16,
    },
    {
      name: "Kiss Me More",
      singer: "Doja Cat",
      path: "audios/KissMeMore-DojaCat.mp3",
      image: "images/Doja Cat - Kiss Me More.jpg",
      id: 17,
    },
    {
      name: "Señorita",
      singer: "Shawn Mendes, Camila Cabello",
      path: "audios/Senorita - Shawn Mendes_ Camila Cabello.mp3",
      image:
        "images/Shawn Mendes, Camila Cabello - Señorita.jpg",
      id: 18,
    },
    {
      name: "Let You Love Me",
      singer: "Rita Ora",
      path: "audios/Let You Love Me - Rita Ora.mp3",
      image: "images/Rita Ora - Let You Love Me.jpg",
      id: 19,
    },
    {
      name: "2U",
      singer: "David Guetta ft Justin Bieber",
      path: "audios/2U - David Guetta_ Justin Bieber.mp3",
      image:
        "images/David Guetta ft Justin Bieber - 2U.jpg",
      id: 20,
    },
    {
      name: "Somewhere Only We Know",
      singer: "Hloshit",
      path: "audios/SomewhereOnlyWeKnow-hloshit.mp3",
      image: "images/Somewhere Only We Know- Hloshit.jpg",
      id: 21,
    },
    {
      name: "Better",
      singer: "Khalid",
      path: "audios/Better - Khalid.mp3",
      image: "images/Khalid - Better.jpg",
      id: 22,
    },
    {
      name: "Calm Down",
      singer: "Rema, Selena Gomez",
      path: "audios/Rema, Selena Gomez - Calm Down.mp3",
      image: "images/Rema, Selena Gomez - Calm Down.jpg",
      id: 23,
    },
    {
      name: "Payphone",
      singer: "Maroon 5",
      path: "audios/Payphone - Maroon 5.mp3",
      image: "images/Payphone- Maroon 5.jpg",
      id: 24,
    },
    {
      name: "Paradise",
      singer: "Alan Walker, K-391, Boy In Space",
      path: "audios/Paradise- Alan Walker, K-391, Boy In Space.mp3",
      image:
        "images/Paradise- Alan Walker, K-391, Boy In Space.jpg",
      id: 25,
    },
    {
      name: "Pano",
      singer: "Zack Tabudlo",
      path: "audios/Pano- Zack Tabudlo.mp3",
      image: "images/Pano- Zack Tabudlo.jpg",
      id: 26,
    },
    {
      name: "Dancing With Your Ghost",
      singer: "Sasha Alex Sloan",
      path: "audios/Dancing With Your Ghost.mp3",
      image: "images/Dancing With Your Ghost.jpg",
      id: 27,
    },
    {
      name: "Downtown",
      singer: "Allie X",
      path: "/audios/Downtown.mp3",
      image: "/images/Downtown.jpg",
      id: 28,
    },
    {
      name: "Is It Just Me?",
      singer: "Sasha Alex Sloan, Charlie Puth",
      path: "/audios/Is It Just Me.mp3",
      image: "/images/Is It Just Me.jpg",
      id: 29,
    },
    {
      name: "This Is What You Came For",
      singer: "Calvin Harris",
      path: "/audios/This Is What You Came For.mp3",
      image: "/images/This Is What You Came For.jpg",
      id: 30,
    },
  ];
  const song = document.querySelector(".music__song");
  const playBtn = document.querySelector(".btn__play");
  const nextBtn = document.querySelector(".btn__next");
  const prevBtn = document.querySelector(".btn__prev");
  const currentTimer = document.querySelector(
    ".music__current"
  );
  const durationTimer = document.querySelector(
    ".music__duration"
  );
  const rangeBar = document.querySelector(".music__range");
  const track = document.querySelector(".music__track");
  const slider = document.querySelector(".music__slider");
  const musicThumbnail =
    document.querySelector(".music__thumb");
  const musicName = document.querySelector(".music__name");
  const musicSinger = document.querySelector(
    ".music__singer"
  );
  const repeatBtn = document.querySelector(".btn__repeat");
  const randomBtn = document.querySelector(".btn__random");
  const playList = document.querySelector(".playlist");
  const muted = document.querySelector(".volume__muted");
  const volumeBar = document.querySelector(
    ".volume__input"
  );
  const volumeTrack = document.querySelector(
    ".volume__track"
  );
  const volumeUp = document.querySelector(".volume__up");
  const volumeDown =
    document.querySelector(".volume__down");
  const volumeValue = document.querySelector(
    ".volume__value"
  );
  const spinning = {
    transform: "rotate(360deg)",
  };
  const timing = {
    duration: 10000,
    iterations: Infinity,
  };
  const musicThumbAnimate = musicThumbnail.animate(
    spinning,
    timing
  );
  let playedSong = [];
  let indexSong = 0;
  let isPlaying = true;
  let isMuted = false;
  let unmuteVolume;
  let returnVolume;
  let isMouseDown = false;
  let isRepeat = false;
  let isRandom = false;
  let timeVolumeValue;

  function createStorage(key) {
    const getValue =
      JSON.parse(localStorage.getItem(key)) ?? {};
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

  // storage
  const musicPlayer = createStorage("music__player");
  const volumeMusic = createStorage("volume__music");
  const currentRandom = musicPlayer.get("isRandom");
  const currentRepeat = musicPlayer.get("isRepeat");
  const currentIndex = musicPlayer.get("indexSong");
  const currentMuted = volumeMusic.get("isMuted");
  const currentIconMuted = volumeMusic.get("iconMuted");
  const currentvalueVolumeBar = volumeMusic.get(
    "valueVolumeBar"
  );
  const currentMouseDown = volumeMusic.get("isMouseDown");
  const currentUnmuteVolume =
    volumeMusic.get("unmuteVolume");
  const currentReturnVolume =
    volumeMusic.get("returnVolume");
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
    if (currentMouseDown) {
      isMouseDown = currentMouseDown;
    }
    if (currentvalueVolumeBar) {
      volumeBar.value = currentvalueVolumeBar;
    }
    if (currentUnmuteVolume) {
      unmuteVolume = currentUnmuteVolume;
    }
    if (currentReturnVolume) {
      returnVolume = currentReturnVolume;
    }
  }
  localStorageMusic();

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
      newIndexSong = Math.floor(
        Math.random() * musics.length
      );
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
                <h3 class="playlist__title">${
                  song.name
                }</h3>
                <p class="playlist__author">${
                  song.singer
                }</p>
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
    const option = document.querySelectorAll(
      ".playlist__option"
    );
    const download = document.querySelectorAll(
      ".playlist__option--load"
    );
    option.forEach((optionE, optionIndex) => {
      optionE.addEventListener("click", handleDownload);
      function handleDownload(e) {
        download.forEach((downloadE, downloadIndex) => {
          downloadE.addEventListener("click", function (e) {
            e.stopPropagation();
          });

          window.addEventListener("click", function (e) {
            if (
              !e.target.matches(
                ".playlist__option,.icon__option"
              )
            ) {
              downloadE.classList.remove(
                "playlist__option--show"
              );
            }
          });

          if (optionIndex === downloadIndex) {
            downloadE.classList.toggle(
              "playlist__option--show"
            );
          } else {
            downloadE.classList.remove(
              "playlist__option--show"
            );
          }
        });
      }
    });
  }
  optionSong();

  function smoothScroll(selector, duration) {
    const viewportHeight = window.innerHeight;
    const heightElementSong =
      playList.firstElementChild.offsetHeight;
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
    const isActiveSong =
      document.querySelector(".song__active");
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
    const songNode = e.target.closest(
      ".playlist__song:not(.song__active)"
    );
    const optionNode = e.target.closest(
      ".playlist__option"
    );
    if (songNode && !optionNode) {
      indexSong = Number(
        songNode.getAttribute("data-index")
      );
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
    musicThumbAnimate.cancel();
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
    currentTimer.textContent = formatTimer(
      song.currentTime
    );
    if (!song.duration) {
      durationTimer.textContent = `00:00`;
    } else {
      durationTimer.textContent = formatTimer(
        song.duration
      );
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
    track.style.width = `${
      (rangeBar.value / song.duration) * 100
    }%`;
    slider.style.left = `${
      (rangeBar.value / song.duration) * 100
    }%`;
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
      volumeBar.value = unmuteVolume;
      song.volume = volumeBar.value / 100;
      if (song.volume === 0 && isMouseDown) {
        volumeBar.value = returnVolume;
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
    volumeMusic.set("iconMuted", muted.innerHTML);
    volumeMusic.set("isMuted", isMuted);
    volumeMusic.set("valueVolumeBar", volumeBar.value);
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
    volumeMusic.set("valueVolumeBar", volumeBar.value);
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

  volumeBar.addEventListener("mousedown", function () {
    isMouseDown = true;
    song.volume = volumeBar.value / 100;
    returnVolume = volumeBar.value;
    volumeMusic.set("isMouseDown", isMouseDown);
    volumeMusic.set("returnVolume", returnVolume);
  });

  volumeBar.addEventListener("input", handleChangeVolume);
  function handleChangeVolume() {
    song.volume = volumeBar.value / 100;
    unmuteVolume = volumeBar.value;
    checkVolume();
    handleVolumeBar();
    handleTimeVolume();
    handleVolumeValue();
    volumeMusic.set("unmuteVolume", unmuteVolume);
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
    volumeMusic.set("unmuteVolume", unmuteVolume);
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
    volumeMusic.set("unmuteVolume", unmuteVolume);
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
      case ",":
        handleVolumeDown();
        break;
      case ".":
        handleVolumeUp();
        break;
      case "m":
        handleMuted();
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
