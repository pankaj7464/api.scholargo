const User = require('../schema/User');
const bcrypt = require('bcrypt');

// Login
const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.status(401).json({ error: 'Authentication failed. Invalid email or password.' });
      } else {

        if (user.password==password) {
          // Passwords match, authentication successful
          // Set user as logged in (store in session or generate token)
          // Example: Setting user in session
          req.session.user = user;
          res.json({ message: 'Authentication successful.' });
        } else {
          res.status(401).json({ error: 'Authentication failed. Invalid email or password.' });
        }

      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to find user.' });
    });
};

// Logout
const logout = (req, res) => {
  // Clear user from session or token (depending on your implementation)
  // Example: Clearing user from session
  req.session.user = null;
  res.json({ message: 'Logout successful.' });
};

module.exports = {
  login,
  logout
};
