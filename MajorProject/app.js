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
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const signUpRoute = require("./routes/user.js");

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
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("Success");
  next();
});
app.use((req, res, next) => {
  res.locals.failure = req.flash("error");
  next();
});
//!routes

// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "newemail123@org",
//     username: "newuser",
//   });
//   let newuser = await User.register(fakeUser, "Helloworld");
//   res.send(newuser);
// });
app.use("/", signUpRoute);
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
