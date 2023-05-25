
// Custom middleware
const checkAuthentication = (req, res, next) => {
  if (req.session.user) {
    // User is logged in, proceed to the next middleware or route handler
    next();
  } else {
    res.status(401).json({ error: 'Authentication required. Please log in.' });
  }
  };

module.exports = {
    checkAuthentication
}
  