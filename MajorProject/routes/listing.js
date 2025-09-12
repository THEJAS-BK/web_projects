const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync");
const ExpressError = require("../util/ExpressError");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details[0].message;
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
//index route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);
//new route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});
//show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("failure", "Page has been deleted");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);
//Create route
router.post(
  "/",
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
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("failure", "this page does not exist");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);
router.put(
  "/:id",
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
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("Success", "Deleted successfully");
    res.redirect("/listings");
  })
);

module.exports = router;
