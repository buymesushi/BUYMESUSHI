const express = require("express");
const User = require("../models/User");

const multer = require("multer");
const path = require("path");

const { auth } = require("../middleware/auth");
const router = express.Router();

router.use(auth);
router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// 수정 요망
router.get('/:id', async (req, res) => {
  try {
    const user = res.locals.user;
    console.log(user);
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;