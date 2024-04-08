const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", async (req, res) => {
  try {
    const data = await Product.find();
    res.render("main", { data: data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

const uri =
  "YOUR_MONGODB_URI";

mongoose
  .connect(uri)
  .then(() => {

    console.log("Connected to database!");
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch(() => {
    console.log("Connection failed.");
  });
