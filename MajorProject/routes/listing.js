const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const { isOwner, validateListing } = require("../middleware");

//index route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);
//new route
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});
//show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: "author" })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Page has been deleted");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);
//Create route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    let listing = req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    req.flash("Success", "New listing created");
    res.redirect("/listings");
  })
);
//update route
router.get(
  "/:id/edit",
  isOwner,
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "this page does not exist");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      new ExpressError(400, "send valid data");
    }
    let { id } = req.params;
    let listing = req.body.listing;
    await Listing.findByIdAndUpdate(id, listing);
    req.flash("Success", "edited successfully");
    res.redirect(`/listings/${id}`);
  })
);
//delete `route`
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("Success", "Deleted successfully");
    res.redirect("/listings");
  })
);

module.exports = router;
