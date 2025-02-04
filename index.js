import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/users.js";
import userVideo from "./routes/video.js";
import userComment from "./routes/comments.js";
import userAuth from "./routes/auth.js";
import cookieParser from "cookie-parser"




const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            console.error("DB Connection Error:", err);
        });
};

// Routes
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", userAuth);
app.use("/api/users", userRoutes);
app.use("/api/videos", userVideo);
app.use("/api/comment", userComment);

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "some thing went wrong";
return res.status(status).json({
    success:false,
    status,
    message,

})

})


// Start Server
app.listen(8800, () => {
    connect();
    console.log("Server running at http://localhost:8800");
});
