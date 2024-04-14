const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const {
  authMiddleware,
  authUserMiddleware,
} = require("../middleware/authMiddleware.js");

router.post("/create", ProductController.createProduct);
router.put("/update/:id", authMiddleware, ProductController.updateProduct);
router.get("/details/:id", ProductController.getDetailsProduct);
router.get("/get-all", ProductController.getAllProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;
