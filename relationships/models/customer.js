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
const Order = mongoose.model("Order", orderSchema);

// const addOrders = async () => {
//   await Order.insertMany([
//     {
//       item: "chocolate",
//       price: 100,
//     },

//     {
//       item: "Strawberry",
//       price: 50,
//     },
//     {
//       item: "Apple",
//       price: 60,
//     },
//   ]);
// };
// addOrders();

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//   let cus1 = new Customer({
//     name: "Billy",
//   });
//   let order1 = await Order.findOne({ item: "chocolate" });
//   let order2 = await Order.findOne({ item: "Strawberry" });
//   cus1.orders.push(order1);
//   cus1.orders.push(order2);
//   let result = await cus1.save();
//   console.log(result);
// };
// addCustomer();
const findCustomer = async () => {
  let res = await Customer.findOne({ name: "Billy" }).populate("orders");
  console.log(res);
};
findCustomer();
