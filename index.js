const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const CategoryRouter = require("./CategoryRouter");
const FoodRouter = require("./FoodRouter");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

const app = express();
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/category", CategoryRouter);
app.use("/food", FoodRouter);

mongoose.connect("mongodb://localhost:27017/af", (err) => {
  if (err) {
    throw err;
  }
  console.log("DB connected successfully");
});

app.listen(5000, () => {
  console.log(`Port listen in 5000`);
});
