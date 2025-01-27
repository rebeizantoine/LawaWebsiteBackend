const express = require("express");
const multer = require("multer");

const app = express();
const router = express.Router();
const upload = multer(); // Initialize multer middleware

// Import your controller functions
const {
  getAllCalculate,
  createCalculate,
  updateCalculate,
  deleteCalculate,
  getCalculateByNameAndLastName,
} = require("../Controllers/calculateController");

// Define your routes
router.get("/", getAllCalculate);
router.get("/duo/:name/:lastName", getCalculateByNameAndLastName);
router.post("/create", upload.none(), createCalculate); // Handle form data
router.put("/update/:id", upload.none(), updateCalculate);
router.delete("/delete/:id", upload.none(), deleteCalculate);

module.exports = router;
