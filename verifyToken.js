import jwt from "jsonwebtoken";
import createError from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    console.error("Token is missing from cookies!");
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      return next(createError(403, "Token is not valid!"));
    }

    console.log("Token verified successfully. Decoded user:", user);
    req.user = user; // Attach the decoded user to the request object
    next();
  });
};

export default verifyToken;
