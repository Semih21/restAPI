const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const cors = require("cors");

// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv/config");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRoute);
//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("Connected to the DB");
  }
);

// //MIDDLEWARES
// app.use("/posts", () => {
//   console.log("This a middleware running");
// });

//ROUTES
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
