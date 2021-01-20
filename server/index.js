/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");

// middlewares
const bodyParser = require("body-parser");
const cors = require("cors");

// models
const QuestionModel = require("./models/questions");

const app = express();

// set middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const __DBURI__ = "mongodb+srv://mediv0:WWzKFfU2q0zBB9tu@forumx.h4egs.mongodb.net/ForumxDB?retryWrites=true&w=majority";
mongoose
    .connect(__DBURI__, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log("connected");

        // listen to express server
        app.listen(process.env.PORT, () => {
            console.log("express server connected");
        });
    })
    .catch((e) => {
        console.log(e);
    });

app.post("/createQuestion", (req, res) => {
    const question = req.body;
    console.log(question);
    const questions = new QuestionModel(question);

    questions
        .save()
        .then((result) => {
            res.status(200)
                .send(
                    JSON.stringify({
                        status: 200,
                        text: "question created",
                        data: result,
                    })
                )
                .end();
        })
        .catch((err) => res.send(err));
});

app.get("/questions", (req, res) => {
    QuestionModel.find()
        .then((result) => {
            res.send(result.reverse());
        })
        .catch((error) => console.log(error));
});

// get single question by its id
app.get("/questions/:id", async (req, res) => {
    let data;
    try {
        data = await QuestionModel.findById(req.params.id);
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    }
    data.comments.reverse();
    res.send(data);
});

// get list of questions for single user
app.get("/user/:email", async (req, res) => {
    let data;
    try {
        data = await QuestionModel.find({ "creator.email": "anonymousaxis@gmail.com" }).exec();
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    }
    res.send(data);
});

app.post("/addComment", async (req, res) => {
    try {
        await QuestionModel.updateOne(
            { _id: req.body.id },
            {
                $push: {
                    comments: {
                        creator: req.body.creator,
                        text: req.body.text,
                    },
                },
            }
        ).then((e) => {
            res.status(200).json({ msg: "comment added" });
        });
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    }
});

app.post("/markAsSolved", async (req, res) => {
    try {
        await QuestionModel.findByIdAndUpdate(
            { _id: req.body.id },
            {
                solved: {
                    status: req.body.status,
                    text: req.body.text,
                    creator: req.body.creator,
                },
            }
        ).then(() => res.status(200).json({ msg: "marked as solved" }));
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    }
});

app.post("/remove", async (req, res) => {
    try {
        await QuestionModel.deleteOne({ _id: req.body.id }).then((e) => {
            res.status(200).json({ msg: "comment deleted" });
        });
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    }
});

module.exports = {
    path: "/api",
    handler: app,
};
