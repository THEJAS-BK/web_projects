const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//   console.log("Hi, I am a middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("HI, I am second middleware");
//   next();
// });
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });
// app.use("/random", (req, res, next) => {
//   console.log("I am only for random");
//   next();
// });
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "giveaccess") {
    next();
  } else {
    throw new ExpressError(401, "ACESS DENIED");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.get("/err", (req, res) => {
  ab = Notification;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(402, "Access is forbidden for /admin");
});
app.use((err, req, res, next) => {
  console.log(err);
  let { status = 500, message = "NOOOOOOOOOOOOOOOOOO" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server started");
});
