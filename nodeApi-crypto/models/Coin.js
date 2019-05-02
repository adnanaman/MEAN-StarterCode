const mongoose = require("mongoose");

var Coin = mongoose.model("Coin", {
  name: { type: String },
  code: { type: String },
  supply: { type: String },
  price: { type: Number }
});

module.exports = { Coin };
