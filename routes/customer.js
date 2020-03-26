const router = require("express").Router();

let Test = require("../models/test.model");
let Customer = require("../models/customer.model");
let LicenseData = require("../models/license.model");
let AddressData = require("../models/address.model");

router.route("/").get((req, res) => {
  Customer.find()
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json("Error" + err));
  console.log("get");
});
router.route("/:id").get((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json("Customer Deleted"))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/update/:id").post((req, res) => {
  Customer.findById(req.params.id).then(customer => {
    customer = customerMaker(req, customer);

    customer
      .save()
      .then(() => res.json("Customer updated"))
      .catch(err => res.status(400).json("Error" + err));
  });
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
  const lType = req.body.license.lType;
  const vClass = req.body.license.vClass;
  const vType = req.body.license.vType;
  const trainType = req.body.license.trainType;

  const newAddress = new AddressData({
    line1: addLine1,
    line2: addLine2,
    city: city,
    zip: zip
  });
  const newLicense = new LicenseData({
    lType: lType,
    vClass: vClass,
    vType: vType,
    trainType: trainType
  });
  const newCust = new Customer({
    name: {
      fname: fname,
      mname: mname,
      lname: lname
    },
    address: newAddress,
    contactNum: contact,
    dateOfBirth: dob,
    license: newLicense
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

function customerMaker(req, customer) {
  const fname = req.body.name.fname;
  const mname = req.body.name.mname;
  const lname = req.body.name.lname;
  const addLine1 = req.body.address.line1;
  const addLine2 = req.body.address.line2;
  const city = req.body.address.city;
  const zip = req.body.address.zip;
  const contact = req.body.contact;
  const dob = Date.parse(req.body.date);
  const lType = req.body.license.lType;
  const vClass = req.body.license.vClass;
  const vType = req.body.license.vType;
  const trainType = req.body.license.trainType;

  const newAddress = new AddressData({
    line1: addLine1,
    line2: addLine2,
    city: city,
    zip: zip
  });
  const newLicense = new LicenseData({
    lType: lType,
    vClass: vClass,
    vType: vType,
    trainType: trainType
  });
  customer.name = { fname: fname, mname: mname, lname: lname };
  customer.address = newAddress;
  customer.contactNum = contact;
  customer.dateOfBirth = dob;
  customer.license = newLicense;
  // const newCust = new Customer({
  //   name: {
  //     fname: fname,
  //     mname: mname,
  //     lname: lname
  //   },
  //   address: newAddress,
  //   contactNum: contact,
  //   dateOfBirth: dob,
  //   license: newLicense
  // });
  return customer;
}

module.exports = router;
