const router = require("express").Router();

let Test = require("../models/test.model");
let Customer = require("../models/customer.model");

router.route("/").get((req, res) => {
  Customer.find()
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json("Error" + err));
  console.log("get");
});

router.route("/add").post((req, res) => {
  const fname = req.body.name.fname;
  const mname = req.body.name.mname;
  const lname = req.body.name.lname;
  const addLine1 = req.body.address.line1;
  const addLine2 = req.body.address.line2;
  const city = req.body.address.city;
  const zip = req.body.address.zip;
  const contact = req.body.contact;
  const dob = Date.parse(req.body.date);

  const newCust = new Customer({
    name: {
      fname: fname,
      mname: mname,
      lname: lname
    },
    address: {
      line1: addLine1,
      line2: addLine2,
      city: city,
      zip: zip
    },
    contactNum: contact,
    dateOfBirth: dob
  });

  // const name = req.body.name.fname;
  // const lname = req.body.name.lname;
  // const contact = req.body.contact;

  // console.log(name + " " + lname);

  // const newTest = new Test({
  //   name: {
  //     fname: name,
  //     lname: lname
  //   },
  //   contact: contact
  // });

  newCust
    .save()
    .then(() => res.json("Customer added"))
    .catch(err => res.status(400).json("Error" + err));

  //   newTest
  //     .save()
  //     .then(() => res.json("Test added"))
  //     .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
