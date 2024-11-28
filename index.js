import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import userVideo from "./routes/video.js";
import userComment from "./routes/comments.js";
import userAuth from "./routes/auth.js";




const app = express();
dotenv.config();

// Middleware
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
app.use("/api/auth", userAuth);
app.use("/api/users", userRoutes);
app.use("/api/video", userVideo);
app.use("/api/comment", userComment);





// Start Server
app.listen(8800, () => {
    connect();
    console.log("Server running at http://localhost:8800");
});
