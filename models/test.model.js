const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    name: {
      fname:{
        type:String,
        required:true
      },
      lname:{
        type:String,
        required:true
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = Test = mongoose.model("test", TestSchema);
