const mongoose = require("mongoose");

let khoahoc = new mongoose.Schema({
  khoa1: {
    type: String,
  },
  khoa2: {
    type: String,
  },
  khoa3: {
    type: String,
  },
});

let allkhoahoc = mongoose.model("Khoahoc", khoahoc);

module.exports = allkhoahoc;
