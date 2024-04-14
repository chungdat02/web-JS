const Admin = require('../models/AdminModel');

const AdminService = {
  // Tạo quản trị viên mới
  createAdmin: async (adminData) => {
    try {
      return await Admin.create(adminData);
    } catch (error) {
      throw error;
    }
  },

  // Lấy danh sách tất cả quản trị viên
  getAllAdmins: async () => {
    try {
      return await Admin.find();
    } catch (error) {
      throw error;
    }
  },

  // Lấy thông tin của một quản trị viên dựa trên ID
  getAdminById: async (adminId) => {
    try {
      return await Admin.findById(adminId);
    } catch (error) {
      throw error;
    }
  },

  // Cập nhật thông tin quản trị viên
  updateAdmin: async (adminId, adminData) => {
    try {
      return await Admin.findByIdAndUpdate(adminId, adminData, { new: true });
    } catch (error) {
      throw error;
    }
  },

  // Xóa quản trị viên
  deleteAdmin: async (adminId) => {
    try {
      return await Admin.findByIdAndDelete(adminId);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = AdminService;
