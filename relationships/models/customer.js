const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const Order = mongoose.model("Order", orderSchema);
// customerSchema.pre("findOneAndDelete", async function () {
//   console.log("PRE MIDDLEWARE");
// });
customerSchema.post("findOneAndDelete", async function (data) {
  console.log(data);
  if (data.orders.length > 0) {
    let result = await Order.deleteMany({ _id: { $in: data.orders } });
    console.log(result);
  }
});
const Customer = mongoose.model("Customer", customerSchema);

const addCust = async () => {
  let newcust = new Customer({
    name: "Archer",
  });
  let newOrder = new Order({
    item: "thing",
    price: 150,
  });
  newcust.orders.push(newOrder);
  await newOrder.save();
  await newcust.save();
};

const deleteCust = async () => {
  let data = await Customer.findByIdAndDelete("68ba80ba1338a8f5ac60e4cc");
  console.log(data);
};
deleteCust();
