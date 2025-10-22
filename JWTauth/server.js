const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
app.use(express.json());
// const bcrypt = require("bcrypt");
// const users = [];

// app.get("/users", (req, res) => {
//   res.send("yes");
// });
// app.post("/users", async (req, res) => {
//   try {
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     users.push({ username: req.body.name, password: hashedPassword });
//     res.status(201).send("Successful");
//   } catch (err) {
//     res.status(500).send("something went wrong");
//   }
//   console.log(users);
// });
// app.post("/users/login", async (req, res) => {
//   const user = users.find((user) => user.username === req.body.name);
//   if (user == null) {
//     return res.status(400).send("User not found");
//   }
//   try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       res.send("Successful login");
//     }
//   } catch {
//     res.status(500).send("Something went wrong");
//   }
// });

const posts = [
  {
    username: "thejas",
    title: "this is post 1",
  },
  {
    username: "shreyas",
    title: "this is post 2",
  },
];
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});
// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const user = { name: username };
//   const acesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   res.json({ accessToken: acesstoken });
// });
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
app.listen(8080, () => {
  console.log("Server started at port 8080");
});
