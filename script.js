const SETINGICON = get("setingic");
const TIMERPAGE = get("fi-page");
const SETINGPAGE = get("sec-page");
const SETINGCLOSEBTN = get("closebtn");
const SOUNDCLOSEBTN = get("closebtn2");
const THEMECLOSEBTN = get("closebtn3");
const GETWORK = get("write-work");
const TASK = get("work");
const GOALARM = get("soun-seting");
const GOTHEME = get("theme-seting");
const MAINPAGE = get("mainpage");
const THEME = get("secelt-theme");
const ERRORMESSAGE = get("error")

function get(selecter) {
  return document.getElementById(selecter);
}

function nameOfTheme() {
  return THEME.value;
}

// Error-massage
function showErrorpage() {
  ERRORMESSAGE.style.top = "50%";
  ERRORMESSAGE.style.zIndex = "99";
  ERRORMESSAGE.style.opacity = "1";
}
function hideErrorpage() {
  ERRORMESSAGE.style.top = "-15%";
  ERRORMESSAGE.style.opacity = "0";
}

// main-page
function showTimerpage() {
  TIMERPAGE.style.display = "flex";
}
function hideTimerpage() {
  TIMERPAGE.style.display = "none";
}

// Time-setimg-page
function showSetingpage() {
  SETINGPAGE.style.display = "flex";
}
function hideSetingpage() {
  SETINGPAGE.style.display = "none";
}

// Sound-seting-page
function showSoundpage() {
  GOALARM.style.display = "flex";
}
function hideSoundpage() {
  GOALARM.style.display = "none";
}

// Theme-seting-page
function showThemepage() {
  GOTHEME.style.display = "flex";
}
function hideThemepage() {
  GOTHEME.style.display = "none";
}

function moveSetingPage() {
  showSetingpage();
  SETINGPAGE.style.left = "0";
  hideTimerpage();
  hideErrorpage();
}
function closeSetingpage() {
  hideSetingpage();
  showTimerpage();
  TASK.innerText = GETWORK.value;
  if (POMOTIME.value > 0) {
    if (POMOTIME.value < 10) {
      MINIUTE.innerText = "0" + POMOTIME.value;
    } else {
      MINIUTE.innerText = POMOTIME.value;
    }
  }
  else {
    showErrorpage();
  }
  if (SHORTTIME.value <= 0 || LONGTIME.value <= 0 || LONGBREAK.value <= 0) {
    showErrorpage();
  }

  setLongtime();
}

function moveSoundpage() {
  showSoundpage();
  hideSetingpage();
}

function closeSoundpage() {
  hideSoundpage();
  showSetingpage();
}

function moveThemepage() {
  showThemepage();
  hideSoundpage();
  hideSetingpage();
}



function setTheme() {
  let nameTheme = nameOfTheme();
  if (nameTheme == 2) {
    return MAINPAGE.style.backgroundImage = `url("pomo/green.jpg")`;
  }
  else if (nameTheme == 4) {
    return MAINPAGE.style.backgroundImage = `url("pomo/flower.jpg")`;
  }
  else if (nameTheme == 6) {
    return MAINPAGE.style.backgroundImage = `url("pomo/wall.jpg")`;
  }
  else if (nameTheme == 8) {
    return MAINPAGE.style.backgroundImage = `url("pomo/winterSnow.jpg")`;
  }
  console.log(nameTheme);
}

function reload() {
  window.location.reload();
}