let start = document.querySelector(".start");
let pla1 = document.querySelector("#player1");
let pla2 = document.querySelector("#player2");
let main = document.querySelector("main");
let pattern = document.querySelector(".pattern");
main.style = "display:none";
pattern.style = "display:none";
start.addEventListener("click", () => {
  if (pla1.value !== "" && pla2.value !== "") {
    setTimeout(() => {
      start.parentElement.parentElement.style = "display:none";
      pattern.style = "display:block";
    }, 200);

    setTimeout(() => {
      pattern.style = "display:none";
    }, 3000);
    setTimeout(() => {
      main.style = "display:flex";
    }, 3000);
  }
});
