const Order = require('../models/OrderModel');

const OrderController = {
  createOrder: async (req, res) => {
    try {
      console.log(req.body);
      const newOrder = await Order.create(req.body);
      return res.status(201).send(newOrder);
    } catch (error) {

      return res.status(500).json({ message: error.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(updatedOrder);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getOrderDetails: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.id);
      if (!deletedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

module.exports = OrderController;
