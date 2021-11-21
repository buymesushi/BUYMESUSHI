const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

const {
    getAllProducts,
    getProductById,
} = require("../controller/productControllers");

router.get("/", getAllProducts);

router.get("/:id", getProductById);

module.exports = router;
