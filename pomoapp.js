const POMOTIME = _("pomo-time");
const SHORTTIME = _("short-time");
const LONGTIME = _("long-time");
const MINIUTE = _("miniute");
const SECONDS = _("seconds");
const PAUSEICON = _("pauseicon");
const LONGBREAK = _("long");
const OPTIONPOMO = _("pomo");
const OPTIONSHORT = _("short");
const OPTIONLONG = _("lonbrak");
const SOUNDBTN = _("soundmove");
const MUSIC = _("secelt-music");
const DARKBTN = _("darkmove");
const BODY = _("body");
const CLOCK = _("clock");
const BREAKMOVEBOX = _("movebox");
const SOUNDMOVEBOX = _("movebox2");
const DARKMOVEBOX = _("movebox3");
const SOUNDARROW = _("sound-arrow");
const THEMEARROW = _("theme-arrow");

let sctime = 60;
let num = 0; /*it is used to pause-button two action one button*/
let time; /*setINterval for POMODORO time*/
let breaktime;/*setINterval for SHORTBREAK time*/
let longrest;/*setINterval for LONGBREAK time*/
let sound = 0;/*it is used to Sound-button two action one button*/
let dark = 0;/*it is used to Dark-button two action one button*/
let mySound;
let mitime; /*Miniute time*/
let shtime; /* ShortBreak -Miniute time*/
let lotime; /* LongBreak -Miniute time*/
let lobreak;
let whichtime = false;
let identifylong = false;

function _(selecter) {
  return document.getElementById(selecter);
}

function nameOfMusic() {
  return MUSIC.value;
}

function addcolorpomo() {
  OPTIONPOMO.style.backgroundColor = "white";
  OPTIONPOMO.style.color = "black";
}

function removecolorpomo() {
  OPTIONPOMO.style.backgroundColor = "#432C7A";
  OPTIONPOMO.style.color = "white";
}

function addcolorshort() {
  OPTIONSHORT.style.backgroundColor = "white";
  OPTIONSHORT.style.color = "black";
}

function removecolorshort() {
  OPTIONSHORT.style.backgroundColor = "#432C7A";
  OPTIONSHORT.style.color = "white";
}

function addcolorlong() {
  OPTIONLONG.style.backgroundColor = "white";
  OPTIONLONG.style.color = "black";
}

function removecolorlong() {
  OPTIONLONG.style.backgroundColor = "#432C7A";
  OPTIONLONG.style.color = "white";
}

function setLongtime() {
  lobreak = LONGBREAK.value;
}

function changeToPomotime(params) {
  mitime = MINIUTE.innerText;
  time = setInterval(setSecond, 100);
  if (POMOTIME.value < 10) {
    if (mitime == "0" + POMOTIME.value) {
      MINIUTE.innerText--;
      mitime--;
    }
  }
  else {
    if (mitime == POMOTIME.value) {
      MINIUTE.innerText--;
      mitime--;
    }
  }

}

function changeToShort(params) {
  shtime = MINIUTE.innerText;
  breaktime = setInterval(ShortBreak, 100);
  if (SHORTTIME.value < 10) {
    if (shtime == SHORTTIME.value) {
      MINIUTE.innerText--;
      shtime--;
    }
  }
  else {
    if (shtime == SHORTTIME.value) {
      MINIUTE.innerText--;
      shtime--;
    }
  }
}

function changeToLong() {
  lotime = MINIUTE.innerText;
  longrest = setInterval(setLongBreak, 100);
  if (LONGTIME.value < 10) {
    if (shtime == LONGTIME.value) {
      MINIUTE.innerText--;
      lotime--;
    }
  }
  else {
    if (lotime == LONGTIME.value) {
      MINIUTE.innerText--;
      lotime--;
    }
  }
}

function setSecond() {
  addcolorpomo();
  sctime--;
  if (sctime < 10) {
    SECONDS.innerText = "0" + sctime;
  } else {
    SECONDS.innerText = sctime;
  }
  if (sctime == 0) {
    mitime--;
    if (mitime < 10) {
      MINIUTE.innerText = "0" + mitime;
    } else {
      MINIUTE.innerText = mitime;
    }
    sctime = 60;
  }
  if (mitime == -1) {
    clearInterval(time);
    MINIUTE.innerText = SHORTTIME.value;
    setTimeout(changeToShort, 2000);
    whichtime = true;
    removecolorpomo();
    if (sound % 2 != 0) {
      setMusic();
      mySound.play();
    }
  }
}

function ShortBreak() {
  if (sound % 2 != 0) {
    mySound.pause();
  }
  addcolorshort();
  sctime--;
  if (sctime < 10) {
    SECONDS.innerText = "0" + sctime;
  } else {
    SECONDS.innerText = sctime;
  }
  if (sctime == 0) {
    shtime--;
    if (shtime < 10) {
      MINIUTE.innerText = "0" + shtime;
    } else {
      MINIUTE.innerText = shtime;
    }
    sctime = 60;
  }
  if (shtime == -1) {
    clearInterval(breaktime);
    MINIUTE.innerText = "00";
    removecolorshort();
    whichtime = false;
    if (sound % 2 != 0) {
      setMusic();
      mySound.play();
    }
    setTimeout(section, 2000);
    lobreak--;
  }
}

function setLongBreak() {
  if (sound % 2 != 0) {
    mySound.pause();
  }
  sctime--;
  if (sctime < 10) {
    SECONDS.innerText = "0" + sctime;
  } else {
    SECONDS.innerText = sctime;
  }
  if (sctime == 0) {
    lotime--;
    if (lotime < 10) {
      MINIUTE.innerText = "0" + lotime;
    } else {
      MINIUTE.innerText = lotime;
    }
    sctime = 60;
  }
  if (lotime == -1) {
    clearInterval(longrest);
    MINIUTE.innerText = "00";
    removecolorlong();
    identifylong == false;
    if (sound % 2 != 0) {
      setMusic();
      mySound.play();
    }
  }
}

function section() {
  if (lobreak != 0 && lobreak > 0) {
    changeToPomotime();
    if (sound % 2 != 0) {
      mySound.pause();
    }
  }
  else {
    if (lobreak == 0) {
      addcolorlong();
      setTimeout(changeToLong(), 2000);
      identifylong = true;
    }
  }
  console.log("section");
  console.log(lobreak);
}


function pauseButton() {
  num++;
  StartTime();
}

function StartTime() {
  if (num % 2 != 0) {
    if (whichtime == false && identifylong == false) {
      changeToPomotime();
    }
    else {
      if (identifylong == true) {
        changeToLong();
      }
      else if (identifylong == false) {
        changeToShort();
      }
    }

    PAUSEICON.className = "fa-solid fa-pause reload";
  }
  else {
    clearInterval(time);
    clearInterval(breaktime);
    clearInterval(longrest);
    PAUSEICON.className = "fa-solid fa-caret-right reload";
  }
}

function moveSoundbtn() {
  sound++;
  if (sound % 2 != 0) {
    SOUNDBTN.style.left = "50%";
    if (dark % 2 != 0) {
      SOUNDBTN.style.backgroundColor = "white";
      SOUNDMOVEBOX.style.backgroundColor = "white";
    } else {
      SOUNDBTN.style.backgroundColor = "black";
    }
  }
  else {
    SOUNDBTN.style.left = "0";
    SOUNDBTN.style.backgroundColor = "white";
  }

}

function moveDarkbtn() {
  dark++;
  if (dark % 2 != 0) {
    DARKBTN.style.left = "50%";
    DARKBTN.style.backgroundColor = "white";
    DARKMOVEBOX.style.backgroundColor = "white";
    onDarkMode();
  }
  else {
    DARKBTN.style.left = "0";
    DARKBTN.style.backgroundColor = "black";
    offDarkMode();
  }

}

function setMusic() {
  let nameMusic = nameOfMusic();
  if (nameMusic == 2) {
    mySound = new Audio('music/Rooster crowing.wav');
  }
  else if (nameMusic == 4) {
    mySound = new Audio('music/Retro game Tone.wav');
  }
  else if (nameMusic == 6) {
    mySound = new Audio('music/Do-Mi-So.mp3');
  }
  else if (nameMusic == 8) {
    mySound = new Audio('music/High-Sound-9000hz.mp3');
  }
  console.log(nameMusic);
}

function onDarkMode() {
  MAINPAGE.style.backgroundColor = "black";
  BODY.style.backgroundColor = "white";
  BODY.style.color = "white";
  MAINPAGE.style.backgroundImage = "none";
  CLOCK.style.borderBlockColor = "white";
  PAUSEICON.style.color = "white";
  SETINGCLOSEBTN.style.color = "white";
  DARKBTN.style.backgroundColor = "white";
  SOUNDCLOSEBTN.style.color = "white";
  THEMECLOSEBTN.style.color = "white";
  GETWORK.style.color = "white";
  SOUNDARROW.style.color = "white";
  THEMEARROW.style.color = "white";
}

function offDarkMode() {
  MAINPAGE.style.backgroundColor = "white";
  BODY.style.backgroundColor = "white";
  BODY.style.color = "black";
  CLOCK.style.borderBlockColor = "black";
  SETINGCLOSEBTN.style.color = "black";
  BREAKMOVEBOX.style.backgroundColor = "white";
  SOUNDMOVEBOX.style.backgroundColor = "white";
  DARKMOVEBOX.style.backgroundColor = "white";
  GETWORK.style.color = "black";
}

function closeThemepage() {
  hideThemepage();
  showSetingpage();
  if (dark % 2 == 0) {
    setTheme();
  }
}










