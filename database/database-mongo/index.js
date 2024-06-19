const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/ecommerce";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});

const itemSchema = new mongoose.Schema({
  description: String,
  quantity: Number,
});

const Item = mongoose.model("Item", itemSchema);

const selectAll = () => {

}

module.exports = {
  selectAll,
};