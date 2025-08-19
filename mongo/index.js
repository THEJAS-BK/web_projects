const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("mongo connected successfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});
//create route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  newChat
    .save()
    .then(() => {
      console.log("chat was saved");
    })
    .catch((err) => console.log(err));
  res.redirect("/chats");
});
//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});
//update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { editText } = req.body;
  await Chat.findByIdAndUpdate(
    id,
    { msg: editText },
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
});
//delete route
app.delete("/chats/:id", (req, res) => {
  let { id } = req.params;
  Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, () => {
  console.log("server started");
});
