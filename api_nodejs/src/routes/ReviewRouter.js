const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/ReviewController");
const { authMiddleware } = require("../middleware/authMiddleware.js");

router.post("/create", authMiddleware, ReviewController.createReview);
router.put("/update/:id", authMiddleware, ReviewController.updateReview);
router.delete("/delete/:id", authMiddleware, ReviewController.deleteReview);
router.get("/details/:id", authMiddleware, ReviewController.getReviewDetails);
router.get("/get-all", ReviewController.getAllReviews);

module.exports = router;
