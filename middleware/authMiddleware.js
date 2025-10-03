const jwt = require("jsonwebtoken");

/**
 * Auth middleware for any authenticated user
 */
const authMiddleware = () => {
  return (req, res, next) => {
    try {
      const authHeader = req.header("Authorization");
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token, authorization denied" });
      }

      const token = authHeader.split(" ")[1].trim();
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded || !decoded.id) {
        return res.status(401).json({ message: "Token is not valid" });
      }

      req.user = decoded; // { id, role, name }
      next();
    } catch (err) {
      console.error("Auth Error:", err.message);
      return res.status(401).json({ message: "Token is not valid" });
    }
  };
};

module.exports = authMiddleware;
