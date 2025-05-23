let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let start = document.querySelector(".homepage-startbtn");
let homepage = document.querySelector(".homepage");
homepage.classList.add("DisplayNone");
start.addEventListener("click", () => {
  let player_name1 = player1.value;
  let player_name2 = player2.value;
  if (player_name1 != "" && player_name2 != "") {
    setInterval(() => {
      homepage.classList.add("DisplayNone");
    }, 250);
  }
});

//?Main Game
let main = document.querySelector("main");
let player_one_series = [];
let player_two_series = [];
let player_one_gameseries = [];
let player_two_gameseries = [];
gamepage();
function gamepage() {
  main.classList.remove("DisplayNone");
  ThreeTwoOne();
  gamestart();
}
function ThreeTwoOne() {
  let time = document.querySelector("#time");
  let sec = 3;
  let id1 = setInterval(() => {
    time.innerText = sec;
    if (sec == 0) {
      time.innerText = "1:00";
      clearInterval(id1);
    }
    sec--;
  }, 1000);
}
