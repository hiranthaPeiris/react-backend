const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

//conect mongo
mongoose
  .connect("mongodb://localhost:27017/react-backend",{ useNewUrlParser: true ,useUnifiedTopology: true})
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log("error connecting" + err));

app.get("/", (req, res) => {
  res.send("hello node");
});

const customerRouter = require("./routes/customer");
app.use("/customer", customerRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
