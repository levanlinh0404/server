const mongoose = require("mongoose");

let typeUser = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
});

let tableUser = mongoose.model("User", typeUser);

module.exports = tableUser;
