const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express("/");
app.use(cors());
app.use(express.json());
app.use("/", routes);

const port = 3001;
const mongodb_url = "mongodb://localhost:27017/simpleCrudNRM";

mongoose.connect(
  mongodb_url,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) return console.error("Error on mongoose connect: ", err);
  }
);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
