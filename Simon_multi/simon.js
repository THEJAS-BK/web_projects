let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let homepage = document.querySelector(".homepage");
let homestartbtn = document.querySelector(".homepage-startbtn");
let main = document.querySelector("main");
HomeTimerbtnborder();
let clockstatus = true;
let clockdisable = document.querySelector(".time");
// homepage.classList.add("DisplayNone"); //!remove homepage
main.classList.add("DisplayNone");
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
      }
      let beforetime = parseInt(timeval) + 1;
      clock.innerText = `${beforetime}:00`;
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
// gameSection();
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
  let body = document.querySelector("body");
  body.addEventListener("keydown", (ev) => {
    if (ev.code == "Space") {
      presskey.classList.add("DisplayNone");
      start = true;
      levelup();
      if (clockstatus == true) {
        clockTime();
      }
    }
  });
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
      if (ev.key == key) {
        let btn = document.querySelector(`.${player_keys[key]}`);
        flashgreen(btn);
        player1_series.push(btn.innerText);
        player1_test();
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
      if (ev.key == key) {
        let btn1 = document.querySelector(`.${player_keys[key]}`);
        flashgreen(btn1);
        player2_series.push(btn1.innerText);
        player2_test();
      }
    }
  }
});

function player1_test() {
  let idx = player1_series.length - 1;
  if (player1_series[idx] === player1_gameseries[idx]) {
    if (player1_series.length === player1_gameseries.length) {
      setTimeout(player1Game, 500);
    }
  } else {
    let red = document.querySelector(".gameone");
    flashred(red);
    player1_gameseries = [];
    player1_series = [];
    setTimeout(player1Game, 500);
    removehearts1();
  }
}
function player2_test() {
  let idx = player2_series.length - 1;
  if (player2_series[idx] === player2_gameseries[idx]) {
    if (player2_series.length === player2_gameseries.length) {
      setTimeout(player2Game, 500);
    }
  } else {
    let red = document.querySelector(".gametwo");
    flashred(red);
    player2_gameseries = [];
    player2_series = [];
    setTimeout(player2Game, 500);
    removehearts2();
  }
}
// Clock
let clock = document.querySelector("#time");
function clockTime() {
  let min = timeval;
  let sec = 59;
  let id1 = setInterval(() => {
    clock.innerText = `${min}:${String(sec).padStart(2, "0")}`;
    if (min == 0 && sec == 0) {
      min = 0;
      sec = 0;
      clearInterval(id1);
    } else if (sec == 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
  }, 500);
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
  player1_hearts[player1_removedhearts].classList.add("DisplayNone");
  player1_removedhearts++;
  if (player1_removedhearts == 3) {
    let disablebtn = document.querySelectorAll(".mainbox1");
    disablebtns(disablebtn);
    gameover1.classList.remove("DisplayNone");
  }
}
function removehearts2() {
  player2_hearts[player2_removedhearts].classList.add("DisplayNone");
  player2_removedhearts++;
  if (player2_removedhearts == 3) {
    let disablebtn = document.querySelectorAll(".mainbox2");
    disablebtns(disablebtn);
    gameover2.classList.remove("DisplayNone");
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
