const router = require("express").Router();

let Test = require("../models/test.model");

router.route("/").get((req, res) => {
  Test.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json("Error" + err));
  console.log("get");
});

router.route("/add").post((req, res) => {
  // const fname = req.body.fname;
  // const mname = req.body.mname;
  // const lname = req.body.lname;
  // const date = Date.parse(req.body.date);
  // const newCust = new Customer({
  //   name: {
  //     firstName: fname,
  //     middleName: mname,
  //     lastName: lname
  //   },
  //   dateOfBirth: date
  // });
  const name = req.body.name.fname;
  const lname = req.body.name.lname;
  console.log(name + " " + lname);

  const newTest = new Test({
    name: {
      fname: name,
      lname: lname
    }
  });

  // newCust
  //   .save()
  //   .then(() => res.json("Customer added"))
  //   .catch(err => res.status(400).json("Error" + err));

  newTest
    .save()
    .then(() => res.json("Test added"))
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
