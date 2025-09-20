const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user");
const wrapAsync = require("../util/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const { isOwner } = require("../middleware");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});
router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, password, email } = req.body;
      const newUser = new User({ email, username });
      const registerdUser = await User.register(newUser, password);
      req.login(registerdUser, (err) => {
        if (err) {
          next(err);
        }
        req.flash("Success", "Welcome to wanderlust");
        res.redirect("/listings");
      });
    } catch (err) {
      req.flash("failure", err.message);
      res.redirect("/signup");
    }
  })
);
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("Success", "Welcome to Wanderlust, you have logged in!!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }
);

//logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("Success", "You have logged out successfully");
    res.redirect("/listings");
  });
});
module.exports = router;
