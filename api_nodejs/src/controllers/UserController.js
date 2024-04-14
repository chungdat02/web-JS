const User = require("../models/UserModel");
const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");
//tất cả thông tin người dùng
const getAllUser = async (req, res) => {
  try {
    const response = await UserService.getAllUser();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
//thong tin nguoi dung
const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userID is required",
      });
    }
    // chay vao day ko thay ham getDetail-> nhay vao catch bao loi 404
    const response = await UserService.getDetailsUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      message: e,
    });
  }
};
//tao token moi sau khi het han
const refreshToken = async (req, res) => {
  try {
    let token = req.headers.token.split(" ")[1];
    if (!token) {
      return res.status(200).json({
        status: "ERR",
        message: "The token is required",
      });
    }
    const response = await JwtService.refreshTokenJwtService(token);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
//đăng kí tài khoản
const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password || !confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email example:abc@gmail.com",
      });
    } else if (password.length < 6) {
      return res.status(200).json({
        status: "ERR",
        message: "Password must be 6 characters or more.",
      });
    } else if (!/[A-Z]/.test(password)) {
      return res.status(200).json({
        status: "ERR",
        message: "Password must be 6 characters and 1 characters uppercase",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The password is equal confirmPassword",
      });
    }
    const response = await UserService.createUser(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
//đăng nhập
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email example :abc@gmail.com.",
      });
    } else if (password.length < 6) {
      return res.status(200).json({
        status: "ERR",
        message: "Password must be 6 characters or more.",
      });
    } else if (!/[A-Z]/.test(password)) {
      return res.status(200).json({
        status: "ERR",
        message: "Password must be 6 characters and 1 characters uppercase",
      });
    }
    const response = await UserService.loginUser(req.body);
    // console.log("response", response);
    const { refresh_token, ...newReponse } = response;
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
    });
    return res.status(200).json({ ...newReponse, refresh_token });
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
//update user
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return res.status(200).json({
        status: "error",
        message: "The userId is required",
      });
    }
    const response = await UserService.updateUser(userId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
//xóa user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    if (!userId) {
      return res.status(200).json({
        status: "error",
        message: "The userId is required",
      });
    }
    const response = await UserService.deleteUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
module.exports = {
  createUser,
  getAllUser,
  deleteUser,
  getDetailsUser,
  loginUser,
  refreshToken,
  updateUser,
};
