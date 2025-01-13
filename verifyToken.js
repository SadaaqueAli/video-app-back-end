import jwt from "jsonwebtoken";
import createError from "./error.js";
import User from "./modles/User.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    console.log("Token:", token);
    if (!token) return next(createError(401, "you are not authenticated!"))

    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
        console.log("Decoded User:", user);  // Log decoded user data
        if (!token) return next(createError(403, "token is not valid!"))
        req.user = user;
        next()
    })
}