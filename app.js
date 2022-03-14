require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const recallRoutes = require("./routes/recall");

// Enable CORS
app.use(cors());

// Body parser to parse request body as JSON
app.use(bodyParser.json());
app.use("/api/recalls", recallRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// please note the 'error' object as the first parameter
// this is invoked when we call 'next(error)' from anywhere
// in our app
app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({ error: { message: error.message } });
});

mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongodb");
    return app.listen(3300);
  })
  .then(() => console.log("Server running at 3300"))
  .catch((error) => console.log(error.message));
