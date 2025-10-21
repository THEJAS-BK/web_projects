const express = require("express");
const app = express();
const path = require("path");
const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});
const { instrument } = require("@socket.io/admin-ui");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/index", (req, res) => {
  res.render("index.ejs", { name: "hello" });
});
io.on("connection", (socket) => {
  socket.on("send-message", (textVal, room) => {
    if (room) {
      io.to(room).emit("recieve-message", textVal, socket.id);
    } else {
      socket.broadcast.emit("recieve-message", textVal, socket.id);
    }
  });
  socket.on("join-room", (room) => {
    socket.join(room);
  });
});
instrument(io, {
  auth: false,
  mode: "development",
});
server.listen(8000, () => {
  console.log("server started");
});
