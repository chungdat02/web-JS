const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController.js");
const { authMiddleware } = require("../middleware/authMiddleware.js");

// Định nghĩa các route cho đơn hàng
router.post("/create", authMiddleware, OrderController.createOrder);
router.put("/update/:id", authMiddleware, OrderController.updateOrder);
router.get("/details/:id", authMiddleware, OrderController.getOrderDetails);
router.get("/get-all", authMiddleware, OrderController.getAllOrders);
router.delete("/delete/:id", authMiddleware, OrderController.deleteOrder);

module.exports = router;
