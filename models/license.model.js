const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const licenseSchema = new Schema({
  lType: {
    type: String,
    required: true
  },
  vClass: {
    type: String,
    required: true
  },
  vType: {
    type: String
  },
  trainType: {
    type: String,
    required: true
  }
});
module.exports = LicenseData = mongoose.model("license",licenseSchema);