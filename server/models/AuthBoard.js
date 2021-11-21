const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const authBoardschema = new mongoose.Schema({
    authBody: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    likes: [{ type: ObjectId, ref: "User" }],
    dislikes: [{ type: ObjectId, ref: "User" }],
    comments: [
        {
            text: { type: String },
            postedBy: { type: ObjectId, ref: "User" },
        },
    ],

    postedBy: {
        type: ObjectId,
        ref: "User",
    },
    compliteAuth: {
        type: Boolean,
        default: false,
    },
    wrongAuth: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const AuthBoard = mongoose.model("AuthBoard", authBoardschema);

module.exports = AuthBoard;
