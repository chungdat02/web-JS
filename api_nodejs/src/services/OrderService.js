const Order = require("../models/OrderModel");

// Lấy tất cả đơn hàng
const getAllOrders = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrders = await Order.find().sort({ createdAt: -1, updatedAt: -1 });
      resolve({
        status: "OK",
        message: "Success",
        data: allOrders,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Lấy thông tin chi tiết của đơn hàng
const getDetailsOrder = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.findOne({
        _id: id,
      });
      if (order === null) {
        resolve({
          status: "ERR",
          message: "The order is not defined",
        });
      }
      resolve({
        status: "OK",
        message: "Success",
        data: order,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Tạo đơn hàng mới
const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdOrder = await Order.create(newOrder);
      if (createdOrder) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdOrder,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

// Cập nhật thông tin đơn hàng
const updateOrder = async (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkOrder = await Order.findOne({ _id: id });
      if (checkOrder === null) {
        resolve({
          status: "ERR",
          message: "The order is not defined",
        });
      }
      const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true });
      resolve({
        status: "OK",
        message: "Success",
        data: updatedOrder,
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Xóa đơn hàng
const deleteOrder = async (id) => {
  try {
    const checkOrder = await Order.findOne({ _id: id });
    if (checkOrder === null) {
      return {
        status: "ERR",
        message: "The order is not defined",
      };
    }
    await Order.findByIdAndDelete(id);
    return {
      status: "OK",
      message: "Delete order success!",
    };
  } catch (e) {
    reject(e);
  }
};

module.exports = {
  deleteOrder,
  createOrder,
  getAllOrders,
  updateOrder,
  getDetailsOrder,
};
