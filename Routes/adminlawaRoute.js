const express = require("express");
const router = express.Router();

const {
  getAllAdminslawa,
  adminlawaLogin,
  createAdminlawa,
} = require("../Controllers/adminlawaController");

router.get("/adminlawa", getAllAdminslawa);
router.post("/adminlawa/login", adminlawaLogin);
router.post("/admin", createAdminlawa);

module.exports = router;
