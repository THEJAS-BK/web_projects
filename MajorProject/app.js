const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const ExpressError = require("./util/ExpressError.js");
const listingRoute = require("./routes/listing.js");
const reviewRoute = require("./routes/review.js");
const session = require("express-session");

app.use(session({ secret: "mysecretcode" }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

main()
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/test", (req, res) => {
  res.send("Yolo");
});

//?routes
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);

app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went Wrong" } = err;
  res.status(status).render("error.ejs", { err });
});
app.listen(8080, () => {
  console.log("Server started");
});
