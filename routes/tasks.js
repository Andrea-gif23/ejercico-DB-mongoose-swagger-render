const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
// CREATE TASK
router.post("/create", async (req, res) => {
    try {
        const task = await Task.create({ title: req.body.title, completed: false });
        res.status(201).send({ message: "Task successfully created", task });
    } catch (error) {
        res.status(500).send({ message: "Error creating task" });
    }
});

// GET TASKS
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving tasks" });
    }
});

// UPDATE TASK TITLE ONLY
router.put("/id/:_id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true });
        res.send({ message: "Task successfully updated", task });
    } catch (error) {
        res.status(500).send({ message: "Error updating task title" });
    }
});

// DELETE TASK
router.delete("/id/:_id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params._id);
        res.send({ message: "Task deleted", task });
    } catch (error) {
        res.status(500).send({ message: "Error deleting task" });
    }
});

module.exports = router;
