const ProductService = require("../services/ProductService");

//lay tat ca san pham
const getAllProduct = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const response = await ProductService.getAllProduct(
      Number(limit) || null,
      Number(page) || 0,
      sort,
      filter
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//tao san pham
const createProduct = async (req, res) => {
  try {
    const { name, image, price, countInStock, rating } = req.body;
    if (!name || !image || !price || !countInStock || !rating) {
      return res.status(200).json({
        status: "error",
        message: "The input is required",
      });
    }
    const response = await ProductService.createProduct(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
//update san pham
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "The productId is required",
      });
    }
    const response = await ProductService.updateProduct(productId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
//xóa user
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "The productId is required",
      });
    }
    const response = await ProductService.deleteProduct(productId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
//lay thong tin san pham
const getDetailsProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    if (!productID) {
      return res.status(200).json({
        status: "ERR",
        message: "The userID is required",
      });
    }
    const response = await ProductService.getDetailsProduct(productID);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getDetailsProduct,
};
