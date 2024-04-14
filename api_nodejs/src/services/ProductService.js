const Product = require("../models/ProductModel");

//lay tat ca san pham
const getAllProduct = async (limit, page, sort, filter) => {
  try {
    let query = {};
    if (filter) {
      const label = filter[0];
      query[label] = { $regex: filter[1] };
    }

    let sortQuery = { createdAt: -1, updatedAt: -1 };
    if (sort) {
      sortQuery[sort[1]] = sort[0];
    }

    const totalProduct = await Product.countDocuments(query);
    let allProduct = [];

    if (!limit) {
      allProduct = await Product.find(query).sort(sortQuery).exec();
    } else {
      allProduct = await Product.find(query)
        .limit(limit)
        .skip(page * limit)
        .sort(sortQuery)
        .exec();
    }

    const result = {
      status: "OK",
      message: "Success",
      data: allProduct,
      total: totalProduct,
      pageCurrent: Number(page) + 1,
      totalPage: Math.ceil(totalProduct / limit),
    };

    return result;
  } catch (e) {
    throw e;
  }
};

//tao san pham
const createProduct = async (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;
    try {
      const checkProduct = await Product.findOne({
        name,
      });
      if (checkProduct) {
        resolve({
          status: "OK",
          message: "The name of product is already ",
        });
      }
      const newProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (newProduct) {
        resolve({
          status: "OK",
          message: "Create Success!",
          data: newProduct,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
//update san pham
const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id,
      });
      if (checkProduct === null) {
        resolve({
          status: "ERR",
          message: "The product is not defined",
        });
      }

      const updatedProduct = await Product.findByIdAndUpdate(id, data, {
        new: true,
      });
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};
//xoa san pham
const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id,
      });
      if (checkProduct === null) {
        resolve({
          status: "ERR",
          message: "The product is not defined",
        });
      }

      await Product.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete product success",
      });
    } catch (e) {
      reject(e);
    }
  });
};
//lay thong tin san pham
const getDetailsProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findOne({
        _id: id,
      });
      if (product === null) {
        resolve({
          status: "ERROR",
          message: "The user is not defined",
        });
      } else {
        resolve({
          status: "OK",
          message: "Success",
          data: product,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProduct,
  deleteProduct,
  getAllProduct,
  getDetailsProduct,
  updateProduct,
};
