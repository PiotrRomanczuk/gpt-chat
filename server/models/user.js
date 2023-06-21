const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String, unique: true, required: true },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);