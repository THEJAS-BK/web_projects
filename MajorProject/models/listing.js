const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-white-house-with-a-porch-and-trees-tOAooVhQQzk",
  },
  price: Number,
  location: String,
  country: String,
});
let Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
