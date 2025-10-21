const messageInp = document.querySelector("#messageInp");
const roomInp = document.querySelector("#roomInp");
const submitBtn = document.querySelector(".btnSubmit");
const chatArea = document.querySelector(".chatArea");
const form = document.querySelector("form");
const joinRoom = document.querySelector(".roomSubmit");

const socket = io("http://localhost:8000");

socket.on("connect", () => {
  displayMessage(socket.id);
});
socket.on("recieve-message", (mes, id) => {
  displayMessage(`${id}=>${mes}`);
});
socket.on("joined-room", (room, id) => {
  displayMessage(`${id} joined room ${room}`);
});
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let textVal = messageInp.value;
  let room = "";
  room = roomInp.value;
  socket.emit("send-message", textVal, room);
  displayMessage(textVal);
});
joinRoom.addEventListener("click", () => {
  const room = roomInp.value;
  socket.emit("join-room", room);
});

function displayMessage(textVal) {
  let p = document.createElement("p");
  p.innerText = textVal;
  chatArea.append(p);
  messageInp.value = "";
}
