const express = require("express");
const router = express.Router({ mergeParams: true });
const { reviewSchema } = require("../schema");
const ExpressError = require("../util/ExpressError");
const wrapAsync = require("../util/wrapAsync");
const Review = require("../models/review");
const Listing = require("../models/listing");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details[0].message;
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listings = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    listings.reviews.push(newReview);
    await newReview.save();
    await listings.save();
    res.redirect(`/listings/${id}`);
  })
);
//Reviews delete route
router.delete(
  ":reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
  })
);
module.exports = router;
