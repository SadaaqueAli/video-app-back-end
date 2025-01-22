
import createError from "../error.js";
import Comment from "../modles/Comment.js";
import Video from "../modles/Video.js";

//addComment,
export const addComment = async (req, res, next) => {
    const newComment = new Comment({ ...req.body, userId: req.user.id });
    try {
      const savedComment = await newComment.save();
      res.status(200).send(savedComment);
    } catch (err) {
      next(err);
    }
  };
//deleteComment,

export const deleteComment = async (req, res, next) => {
};
//getComments,
export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId });
        res.status(200).json(comments);
    } catch (err) {
        next(err);
    }
};