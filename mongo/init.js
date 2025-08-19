const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
  {
    from: "knight",
    to: "bishop",
    msg: "YOU SUCK",
    created_at: new Date(),
  },
  { from: "queen", to: "rook", msg: "Hold the line!", created_at: new Date() },
  { from: "pawn", to: "queen", msg: "Protect me!", created_at: new Date() },
  { from: "bishop", to: "knight", msg: "Nice move!", created_at: new Date() },
  { from: "rook", to: "king", msg: "Castle now?", created_at: new Date() },
  { from: "king", to: "queen", msg: "Stay close.", created_at: new Date() },
  {
    from: "queen",
    to: "bishop",
    msg: "Good strategy!",
    created_at: new Date(),
  },
  { from: "pawn", to: "rook", msg: "I’ll cover you.", created_at: new Date() },
  {
    from: "bishop",
    to: "pawn",
    msg: "Advance carefully.",
    created_at: new Date(),
  },
  { from: "rook", to: "pawn", msg: "Don’t rush!", created_at: new Date() },
  {
    from: "knight",
    to: "queen",
    msg: "I’ll fork them!",
    created_at: new Date(),
  },
  { from: "queen", to: "king", msg: "Check incoming!", created_at: new Date() },
  { from: "king", to: "rook", msg: "Cover my back.", created_at: new Date() },
  {
    from: "pawn",
    to: "pawn",
    msg: "Solidarity brother!",
    created_at: new Date(),
  },
  {
    from: "bishop",
    to: "king",
    msg: "Diagonal is safe.",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);
