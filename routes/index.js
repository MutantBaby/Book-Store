const express = require("express");
const router = express.Router();

// @decs  Login/Landing Page
// @route GET /
router.get("/", (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// @decs  Dashboard
// @route GET /dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
