require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");
const multerErrorHandler = require("./utils/multerErrorHandler");
const orderSummaryLawaRoutes = require("./Routes/orderSummaryRoute");
const adminlawaRoute = require("./Routes/adminlawaRoute");
const calculateRoute = require("./Routes/calculateRoute");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // Handles JSON data
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded data

// Routes
app.use("/orderlawa", orderSummaryLawaRoutes);
app.use("/adminlawa", adminlawaRoute);
app.use("/calculate", calculateRoute);

// Error Handling
app.use(multerErrorHandler);

// Start Server
app.listen(port, async () => {
  try {
    await dbConnection();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
});
