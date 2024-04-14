const Admin = require('../models/AdminModel');

const AdminController = {
  // Tạo quản trị viên mới
  createAdmin: async (req, res) => {
    try {
      const newAdmin = await Admin.create(req.body);
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Lấy danh sách tất cả quản trị viên
  getAllAdmins: async (req, res) => {
    try {
      const admins = await Admin.find();
      res.json(admins);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Lấy thông tin của một quản trị viên dựa trên ID
  getAdminById: async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Cập nhật thông tin quản trị viên
  updateAdmin: async (req, res) => {
    try {
      const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedAdmin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.json(updatedAdmin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Xóa quản trị viên
  deleteAdmin: async (req, res) => {
    try {
      const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
      if (!deletedAdmin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.json({ message: 'Admin deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = AdminController;
