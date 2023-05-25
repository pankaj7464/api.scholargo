const Admin = require('../schema/Admin')
// Create a new admin
const addAdmin =  async (req, res) => {
    try {
      const adminData = req.body;
      const admin = new Admin(adminData);
      const createdAdmin = await admin.save();
      res.status(201).json(createdAdmin);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create admin.' });
    }
  };
  
  // Retrieve all admins
  const getAllAdmin =  async (req, res) => {
    try {
      const admins = await Admin.find();
      res.json(admins);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch admins.' });
    }
  };
  
  // Retrieve a single admin by ID
  const getSingleAdmin =  async (req, res) => {
    try {
      const adminId = req.params.id;
      const admin = await Admin.findById(adminId);
      if (!admin) {
        res.status(404).json({ error: 'Admin not found.' });
      } else {
        res.json(admin);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch admin.' });
    }
  };
  
  // Update an admin by ID
 const updateAdmin =  async (req, res) => {
    try {
      const adminId = req.params.id;
      const updatedData = req.body;
      const admin = await Admin.findByIdAndUpdate(adminId, updatedData, { new: true });
      if (!admin) {
        res.status(404).json({ error: 'Admin not found.' });
      } else {
        res.json(admin);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update admin.' });
    }
  };
  
  // Delete an admin by ID
  const deleteAdmin =  async (req, res) => {
    try {
      const adminId = req.params.id;
      const admin = await Admin.findByIdAndDelete(adminId);
      if (!admin) {
        res.status(404).json({ error: 'Admin not found.' });
      } else {
        res.json(admin);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete admin.' });
    }
  };
  
  module.exports  = {getAllAdmin,addAdmin,deleteAdmin,getSingleAdmin,updateAdmin}