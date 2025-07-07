let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let homepage = document.querySelector(".homepage");
let homestartbtn = document.querySelector(".homepage-startbtn");
let main = document.querySelector("main");
HomeTimerbtnborder();
let clockstatus = true;
let clockdisable = document.querySelector(".time");
// homepage.classList.add("DisplayNone"); //!remove homepage
let player1_gameover = false;
let player2_gameover = false;
main.classList.add("DisplayNone");
let clockInterval = null;
let player1_box = document.querySelector(".box1");
let player2_box = document.querySelector(".box2");
let player1_num = 0;
let player2_num = 0;
homestartbtn.addEventListener("click", () => {
  if (player1.value != "" && player2.value != "") {
    players_Gamenames();
    if (HomeTimerbtnval() == "selected") {
      homepage.classList.add("DisplayNone");
      let selected = document.querySelector(".selected");
      timeval = selected.getAttribute("value");
      if (timeval == "-1") {
        clockstatus = false;
        clockdisable.classList.add("DisplayNone");
      } else {
        clockstatus = true;
      }
      let beforetime = parseInt(timeval);
      clock.innerText = `${beforetime}:59`;
      setTimeout(() => {
        main.classList.remove("DisplayNone");
        gameSection();
      }, 250);
    }
  }
});
function HomeTimerbtnborder() {
  let timebtns = document.querySelectorAll(".hometime");
  timebtns.forEach((el) => {
    el.addEventListener("click", () => {
      timebtns.forEach((el) => {
        el.classList.remove("selected");
      });
      el.classList.add("selected");
    });
  });
}
function HomeTimerbtnval() {
  let timebtnsafter = document.querySelectorAll(".hometime");
  for (time of timebtnsafter) {
    let att = time.getAttribute("class").split(" ");
    if (att[1] == "selected") {
      return att[1];
    }
  }
}
//? Homepage code end
let body = document.querySelector("body");
let presskey = document.querySelector(".keyToStart");
let player1_gameseries = [];
let player2_gameseries = [];
let player1_series = [];
let player2_series = [];
let start = false;
let player1_idx = ["p11", "p12", "p13", "p14"];
let player2_idx = ["p21", "p22", "p23", "p24"];
let player_keys = {
  1: "p11",
  2: "p12",
  3: "p13",
  4: "p14",
  8: "p21",
  9: "p22",
  0: "p23",
  "-": "p24",
};
const legalkeys1 = ["1", "2", "3", "4"];
const legalkeys2 = ["9", "8", "0", "-"];

function gameSection() {
  body.addEventListener("keydown", startGameOnce);
}

function startGameOnce(ev) {
  if (ev.code == "Space") {
    presskey.classList.add("DisplayNone");
    start = true;
    levelup();
    if (clockstatus == true) {
      clockTime();
    }
    body.addEventListener("keydown", startGameOnce);
  }
}

function levelup() {
  player1Game();
  player2Game();
}
function flashgreen(btn) {
  btn.classList.add("flashgreen");
  setTimeout(() => {
    btn.classList.remove("flashgreen");
  }, 250);
}
function flashred(btn) {
  btn.classList.add("flashred");
  setTimeout(() => {
    btn.classList.remove("flashred");
  }, 250);
}
function player1Game() {
  player1_series = [];
  let idx = Math.floor(Math.random() * 4);
  let btncolor = player1_idx[idx];
  let btnw = document.querySelector(`.${btncolor}`);
  flashgreen(btnw);
  player1_gameseries.push(btnw.innerText);
}
function blinkbtnuser() {
  flashgreen(this);
}

body.addEventListener("keydown", (ev) => {
  if (start == true) {
    for (key of legalkeys1) {
      if (player1_gameover == false) {
        if (ev.key == key) {
          let btn = document.querySelector(`.${player_keys[key]}`);
          flashgreen(btn);
          player1_series.push(btn.innerText);
          player1_test();
        }
      }
    }
  }
});

function player2Game() {
  player2_series = [];
  let idx = Math.floor(Math.random() * 4);
  let btncolor = player2_idx[idx];
  let btnw = document.querySelector(`.${btncolor}`);
  flashgreen(btnw);
  player2_gameseries.push(btnw.innerText);
}

body.addEventListener("keydown", (ev) => {
  if (start == true) {
    for (key of legalkeys2) {
      if (player2_gameover == false) {
        if (ev.key == key) {
          let btn1 = document.querySelector(`.${player_keys[key]}`);
          flashgreen(btn1);
          player2_series.push(btn1.innerText);
          player2_test();
        }
      }
    }
  }
});
let player1_solvpattern = 0;
let player2_solvpattern = 0;
let curpattern1 = 0;
let curpattern2 = 0;
function player1_test() {
  let idx = player1_series.length - 1;
  if (player1_series[idx] === player1_gameseries[idx]) {
    if (player1_series.length === player1_gameseries.length) {
      setTimeout(player1Game, 500);
      curpattern1++;
      if (player1_solvpattern < curpattern1) {
        player1_solvpattern = curpattern1;
      }
      player1_centerboxes();
    }
  } else {
    let red = document.querySelector(".gameone");
    flashred(red);
    player1_gameseries = [];
    setTimeout(player1Game, 1000);
    removehearts1();
    curpattern1 = 0;
    remove_centerboxes(player1_box);
    player1_num = 0;
    let allTempBtns = document.querySelectorAll(".mainbox1");
    allTempBtns.forEach((el) => {
      el.classList.add("DisplayNone");
      setTimeout(() => {
        if (player1_removedhearts != 3) {
          allTempBtns.forEach((el) => {
            el.classList.remove("DisplayNone");
          });
        }
      }, 260);
    });
  }
}
function player2_test() {
  let idx = player2_series.length - 1;
  if (player2_series[idx] === player2_gameseries[idx]) {
    if (player2_series.length === player2_gameseries.length) {
      setTimeout(player2Game, 500);
      curpattern2++;
      if (player2_solvpattern < curpattern2) {
        player2_solvpattern = curpattern2;
      }
      player2_centerboxes();
    }
  } else {
    let red = document.querySelector(".gametwo");
    flashred(red);
    player2_gameseries = [];
    setTimeout(player2Game, 1000);
    removehearts2();
    curpattern2 = 0;
    remove_centerboxes2(player2_box);
    player2_num = 0;
    let allTempBtns = document.querySelectorAll(".mainbox2");
    allTempBtns.forEach((el) => {
      el.classList.add("DisplayNone");
      setTimeout(() => {
        if (player2_removedhearts != 3) {
          allTempBtns.forEach((el) => {
            el.classList.remove("DisplayNone");
          });
        }
      }, 260);
    });
  }
}
// Clock
let timeover = false;
let clock = document.querySelector("#time");
function clockTime() {
  let min = parseInt(timeval);
  let sec = 59;
  if (clockInterval) {
    clearInterval(clockInterval);
  }
  clockInterval = setInterval(() => {
    clock.innerText = `${min}:${String(sec).padStart(2, "0")}`;
    if (player1_removedhearts === 3 && player2_removedhearts === 3) {
      main.classList.add("DisplayNone");
      result.classList.remove("DisplayNone");
      endbtnclicked = true;
      checkwinner();
    } else if (min === 0 && sec === 0) {
      clearInterval(clockInterval);
      timeover = true;
      clockInterval = null;
      if (endbtnclicked !== true) {
        if (timeover == true) {
          main.classList.add("DisplayNone");
          result.classList.remove("DisplayNone");
          checkwinner();
        }
      }
    } else if (sec === 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
  }, 1000);
}

// PlayerHearts
let player1_hearts = document.querySelectorAll(".heart1");
let player2_hearts = document.querySelectorAll(".heart2");
let player1_removedhearts = 0;
let player2_removedhearts = 0;
let gameover1 = document.querySelector(".gameover1");
let gameover2 = document.querySelector(".gameover2");
gameover1.classList.add("DisplayNone");
gameover2.classList.add("DisplayNone");
function removehearts1() {
  if (player1_removedhearts <= 3) {
    player1_hearts[player1_removedhearts].classList.add("DisplayNone");
    player1_removedhearts++;
    if (player1_removedhearts == 3) {
      player1_gameover = true;
      let disablebtn = document.querySelectorAll(".mainbox1");
      disablebtns(disablebtn);
      gameover1.classList.remove("DisplayNone");
      allbtns = document.querySelectorAll("mainbox1");
      allbtns.forEach((el) => {
        el.classList.add("DisplayNone");
      });
    }
  }
}
function removehearts2() {
  if (player2_removedhearts <= 3) {
    player2_hearts[player2_removedhearts].classList.add("DisplayNone");
    player2_removedhearts++;
    if (player2_removedhearts == 3) {
      player2_gameover = true;
      let disablebtn = document.querySelectorAll(".mainbox2");
      disablebtns(disablebtn);
      gameover2.classList.remove("DisplayNone");
      allbtns = document.querySelectorAll("mainbox1");
      allbtns.forEach((el) => {
        el.classList.add("DisplayNone");
      });
    }
  }
}

function disablebtns(btns) {
  btns.forEach((el) => {
    el.classList.add("DisplayNone");
  });
}
// Playernames
let player1name = document.getElementById("player1_gamename");
let player2name = document.getElementById("player2_gamename");
function players_Gamenames() {
  player1name.innerText = `${player1.value}`;
  player2name.innerText = `${player2.value}`;
}
// Game End
let endbtnclicked = false;
let endbtn = document.querySelector(".endbtn");
let result = document.querySelector(".result");
let winnerName = document.querySelector(".winner");
result.classList.add("DisplayNone");
endbtn.addEventListener("click", () => {
  main.classList.add("DisplayNone");
  result.classList.remove("DisplayNone");
  endbtnclicked = true;
  checkwinner();
});
let player1resName = document.querySelector("#player1_resname");
let player2resName = document.querySelector("#player2_resname");
let player1resSolved = document.querySelector("#player1solved");
let player2resSolved = document.querySelector("#player2solved");

function checkwinner() {
  if (player1_solvpattern > player2_solvpattern) {
    winnerName.innerText = `${player1.value} Wins!!!`;
  } else if (player1_solvpattern == player2_solvpattern) {
    winnerName.innerText = "DRAW";
  } else {
    winnerName.innerText = `${player2.value}`;
    player2_solvpattern;
  }
  player1resName.innerText = player1.value;
  player2resName.innerText = player2.value;
  player1resSolved.innerText = `${player1_solvpattern}`;
  player2resSolved.innerText = `${player2_solvpattern}`;
}
// Homebtn
let gohome = document.querySelector(".home");
let remove_options = document.querySelectorAll(".hometime");
gohome.addEventListener("click", () => {
  location.reload();
});

// center line
const boxColors = [
  "#ccffcc",
  "#99ff99",
  "#66ff66", // Light Green
  "#33cc33",
  "#00cc00",
  "#009900", // Bright Green
  "#ccff66",
  "#ccff33",
  "#ccff00", // Yellow-Green
  "#ffff66",
  "#ffff33",
  "#ffff00", // Yellow
  "#ffcc66",
  "#ffbb33",
  "#ffaa00", // Light Orange
  "#ff9933",
  "#ff8800",
  "#ff7700", // Orange
  "#ff6666",
  "#ff4444",
  "#ff2222", // Light Red
  "#ff0000",
  "#cc0000",
  "#990000",
  "#660000", // Red
];
function player1_centerboxes() {
  if (player1_num < 25) {
    div = document.createElement("div");
    div.style.backgroundColor = `${boxColors[player1_num]}`;
    player1_num++;
    div.classList.add("player1_centerbox");
    player1_box.append(div);
  }
}
function remove_centerboxes(box) {
  allbtns = document.querySelectorAll(".player1_centerbox");
  allbtns.forEach((el) => {
    console.log(el);
    box.removeChild(el);
  });
}
function remove_centerboxes2(box) {
  allbtns = document.querySelectorAll(".player2_centerbox");
  allbtns.forEach((el) => {
    box.removeChild(el);
  });
}
function player2_centerboxes() {
  if (player2_num < 25) {
    div = document.createElement("div");
    div.style.backgroundColor = `${boxColors[player2_num]}`;
    player2_num++;
    div.classList.add("player2_centerbox");
    player2_box.append(div);
  }
}
