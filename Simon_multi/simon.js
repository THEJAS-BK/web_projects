let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let homepage = document.querySelector(".homepage");
let homestartbtn = document.querySelector(".homepage-startbtn");
let main = document.querySelector("main");
HomeTimerbtnborder();
let timerVal = 0;
homepage.classList.add("DisplayNone"); //remove homepage
// main.classList.add("DisplayNone");
homestartbtn.addEventListener("click", () => {
  if (player1.value != "" && player2.value != "") {
    if (HomeTimerbtnval() == "selected") {
      homepage.classList.add("DisplayNone");
      setTimeout(() => {
        main.classList.remove("DisplayNone");
        // gameSection();
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
      let btn = document.querySelector(`.${att[1]}`);
      timerVal = btn.getAttribute("value");
      return att[1];
    }
  }
}
//? Homepage code end
gameSection();
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
const legalkeys = ["1", "2", "3", "4", "9", "-", "8", "0"];
function gameSection() {
  let body = document.querySelector("body");
  body.addEventListener("keydown", () => {
    presskey.classList.add("DisplayNone");
    if (start == false) {
      levelup();
      start = true;
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
  }, 500);
}
function player1Game() {
  let idx = Math.floor(Math.random() * 4);
  let btncolor = player1_idx[idx];
  let btnw = document.querySelector(`.${btncolor}`);
  flashgreen(btnw);
  playersclick();
}
function blinkbtnuser() {
  flashgreen(this);
}
function playersclick() {
  body.addEventListener("keydown", (ev) => {
    for (key of legalkeys) {
      if (ev.key == key) {
        let btn = document.querySelector(`.${player_keys[key]}`);
        flashgreen(btn);
      }
    }
  });
}
function player2Game() {
  let idx = Math.floor(Math.random() * 4);
  let btncolor = player2_idx[idx];
  let btnw = document.querySelector(`.${btncolor}`);
  flashgreen(btnw);
  playersclick();
}
