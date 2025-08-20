const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    set: (v) => (v === "" ? "/images/Default_house.jpeg" : v),
    default: "/images/Default_house.jpeg",
  },
  price: Number,
  location: String,
  country: String,
});
let Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
