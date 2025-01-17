import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    VideoUrl: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        default:[],
    },
    likes: {
        type: [String],
        default:[],
    },
    dislikes: {
        type: [String],
        default:[],
    },
},
    { timestamps: true }
);

export default mongoose.model("Video", VideoSchema)