const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    name: {
      fname: {
        type: String,
        required: true
      },
      mname: {
        type: String
      },
      lname: {
        type: String,
        required: true
      }
    },
    address: {
      line1: {
        type: String,
        required: true
      },
      line2: {
        type: String
      },
      city: {
        type: String,
        required: true
      },
      zip: {
        type: String
      }
    },
    contactNum: [Number],
    dateOfBirth: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = Customer = mongoose.model("customer",CustomerSchema);