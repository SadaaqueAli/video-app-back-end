import express from "express";
import { addVideo, updateVideo, deleteVideo, random, addView, sub } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
import { getByTag, search } from "../controllers/user.js";

const router = express.Router();
//Create a video
router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", addVideo);
router.put("/view/:id", addView);
router.get("/random", random);
router.get("/sub", verifyToken, sub);
router.get("/tags", getByTag, sub);
router.get("/search", search);





export default router;