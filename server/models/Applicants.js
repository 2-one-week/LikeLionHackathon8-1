const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applySchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    maxlength: 50,
  },
  phonenumber: {
    type: Number,
  },
  sex: {
    type: String,
  },
  department: {
    type: String,
  },
  files: {
    type: Array,
    default: [],
  },
});

const Applicants = mongoose.model("Applicants", applySchema);
module.exports = { Applicants };
