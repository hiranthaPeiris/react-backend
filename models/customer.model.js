const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressData = require("./address.model");
const licenseData = require("./license.model");

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
      type: Schema.Types.ObjectId,
      ref: addressData
    },
    contactNum: [Number],
    dateOfBirth: {
      type: Date,
      required: true
    },
    license: {
      type: Schema.Types.ObjectId,
      ref: licenseData
    }
  },
  { timestamps: true }
);

// const addressSchema = new Schema({
//   line1: {
//     type: String,
//     //required: true
//   },
//   line2: {
//     type: String
//   },
//   city: {
//     type: String,
//     //required: true
//   },
//   zip: {
//     type: String
//   }
// });
// mongoose.model("addressData", addressSchema, "addressData");

// const licenseSchema = new Schema({
//   lType: {
//     type: String,
//     required: true
//   },
//   vClass: {
//     type: String,
//     required: true
//   },
//   vType: {
//     type: String,
//   },
//   trainType: {
//     type: String,
//     required: true
//   }
// });
// mongoose.model("licenceData", licenseSchema, "licenseData");

module.exports = Customer = mongoose.model("customer", CustomerSchema);

