const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getMonitoring,
  createMonitoring,
} = require("../controllers/monitoringController");

router.get("/", authMiddleware, getMonitoring);

router.post("/", authMiddleware, createMonitoring);

module.exports = router;