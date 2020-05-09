const mongoose = require("mongoose");

const ElementSchema = new mongoose.Schema({
  content: { type: String, required: true },
});

module.exports = mongoose.model("elements", ElementSchema);
