const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  line1: {
    type: String
    //required: true
  },
  line2: {
    type: String
  },
  city: {
    type: String
    //required: true
  },
  zip: {
    type: String
  }
});
module.exports = AddressData = mongoose.model("address", addressSchema);
