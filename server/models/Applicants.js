const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applySchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  department: {
    type: String,
  },
  content1: {
    type: String,
  },
  content2: {
    type: String
  },
  content3: {
    type : String
  }
});

const Applicants = mongoose.model("Applicants", applySchema);
module.exports = { Applicants };
