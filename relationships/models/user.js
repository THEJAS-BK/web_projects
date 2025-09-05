const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});
const User = mongoose.model("User", userSchema);
const addUser = async () => {
  let user1 = new User({
    username: "Sherlockhomes",
    addresses: [
      {
        location: "2234 wall street",
        city: "London",
      },
    ],
  });
  user1.addresses.push({ location: "44pq wallstreet", city: "amer na ella" });
  let result = await user1.save();
  console.log(result);
};
addUser();
