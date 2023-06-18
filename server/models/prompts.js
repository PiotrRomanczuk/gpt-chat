const mongoose = require("mongoose");

const prompts = new mongoose.Schema({
  prompt_req: { type: String, default: null, required: true},
  prompt_res: { type: String, default: null },
  prompt_id: { type: Number, unique: true },
  chat_model: { type: String },
  data: { type: Date, default: Date.now},
});

module.exports = mongoose.model("prompt", prompts);