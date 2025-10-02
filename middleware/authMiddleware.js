const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {
  // roles param can be a string or array of allowed roles
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access forbidden: insufficient role" });
      }

      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: "Token is not valid" });
    }
  };
};

module.exports = authMiddleware;
