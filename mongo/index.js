const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressErorr.js");

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
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
//Middleware
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}
//show route
// app.get(
//   "/chats/:id",
//   asyncWrap(async (req, res, next) => {
//     let { id } = req.params;
//     let chat = await Chat.findById(id);
//     if (!chat) {
//       next(new ExpressError(401, "chat not found"));
//     } else {
//       res.render("show.ejs", { chat });
//     }
//   })
// );
//index route
app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});
//create route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res, next) => {
  try {
    let { from, msg, to } = req.body;
    let newChat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});
//edit route
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});
//update route
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { editText } = req.body;
    await Chat.findByIdAndUpdate(
      id,
      { msg: editText },
      { runValidators: true, new: true }
    );
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
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

const handleValidationError = (err) => {
  console.log("this is a validation error, Fix it");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log("This is a", err.name);
  if (err.name == "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

//Error hanling middleware
app.use((err, req, res, next) => {
  let { status = 404, message = "Not found" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("server started");
});
