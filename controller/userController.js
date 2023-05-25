const User = require('../schema/User')
const bcrypt = require('bcrypt');
// Create a new admin
const addUser = (req, res) => {
    const { userName, email, password } = req.body;
  
    // Check if email already exists
    User.findOne({ email })
      .then(existingUser => {
        if (existingUser) {
          res.status(400).json({ error: 'Email already exists.' });
        } else {
            
          const user = new User({
            userName,
            email,
            password
          });
  
          user.save()
            .then(createdUser => {
              res.status(201).json(createdUser);
            })
            .catch(error => {
              res.status(500).json({ error: 'Failed to create admin.' });
            });
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to check email uniqueness.' });
      });
  };
  
  // Retrieve all admins
  const getAllUser =  async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch User.' });
    }
  };
  
  // Retrieve a single admin by ID
  const getSingleUser =  async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        res.status(404).json({ error: 'Admin not found.' });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch admin.' });
    }
  };
  
  // Update an admin by ID
 const updateUser =  async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
      if (!user) {
        res.status(404).json({ error: 'User not found.' });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update User.' });
    }
  };
  
  // Delete an admin by ID
  const deleteUser =  async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found.' });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete User.' });
    }
  };
  
  module.exports  = {getAllUser,addUser,deleteUser,getSingleUser,updateUser}