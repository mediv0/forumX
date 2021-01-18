/* eslint-disable no-console */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },
        creator: {
            type: Object,
            required: true,
        },
        comments: {
            type: Array,
            default: [],
        },
        solved: {
            type: Object,
            default: {
                status: false,
                text: null,
                creator: null,
            },
        },
    },
    { timestamps: true }
);

const QuestionModel = mongoose.model("questions", questionSchema);

module.exports = QuestionModel;
