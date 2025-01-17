import express from "express";
import {  update,deleteUser, getUser, subscribe, unsubscribe, like, dislike } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
//update user
router.put("/:id", verifyToken, update);  // :id ko URL mein parameter ke roop mein pass karein

//delete user
router.delete("/id",deleteUser)

//get a user
router.get("/find/id",getUser)

//subscribe a user
router.put("/sub/id",subscribe)

//unsubscribe user
router.put("/unsub/id",unsubscribe)

//like a video
router.put("/like/videoId",like)

//dislike a video
router.put("/dislike/videoId",dislike)


export default router;

