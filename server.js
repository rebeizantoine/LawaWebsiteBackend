require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const dbConnection = require("./config/db"); // Ensure this is the correct path
const multerErrorHandler = require("./utils/multerErrorHandler"); // Ensure this is the correct path
const orderSummaryLawaRoutes = require("./Routes/orderSummaryRoute"); // Ensure this is the correct path
const adminlawaRoute = require("./Routes/adminlawaRoute");

const app = express();
const port = process.env.PORT || 8000;

// Initialize multer with default settings
const upload = multer();

app.use(cors());
app.use(express.json()); // Handles JSON data
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded data

// Use multer middleware for handling multipart/form-data
app.use(upload.array());

app.use("/orderlawa", orderSummaryLawaRoutes);
app.use("/adminlawa", adminlawaRoute);
app.use(multerErrorHandler);

app.listen(port, async () => {
  try {
    await dbConnection(); // Ensure dbConnection is a promise and use async/await
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
});
