const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');


router.post('/create', AdminController.createAdmin);
router.get('/:id', AdminController.getAdminById);
router.put('/:id/update', AdminController.updateAdmin);
router.delete('/:id/delete', AdminController.deleteAdmin);
router.get('/list', AdminController.getAllAdmins);

module.exports = router;
