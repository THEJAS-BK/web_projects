const express = require("express");
const app = express();

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
    throw new Error("ACCESS DENIED");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("Hi, You're at the right spot");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});
app.get("/random", (req, res) => {
  res.send("Hi, This is random");
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(8080, () => {
  console.log("Server started");
});
