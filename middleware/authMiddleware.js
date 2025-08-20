// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function auth(required = true) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) {
      if (required) return res.status(401).json({ message: 'No token, authorization denied' });
      return next();
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // contains { id, ... } from token
      next();
    } catch (err) {
      if (required) return res.status(401).json({ message: 'Token invalid or expired' });
      next();
    }
  };
}

module.exports = auth;
