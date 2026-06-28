const Task = require("../models/Task");

// GET ALL TASKS
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        console.log("GET TASK ERROR:", error);   // ADD THIS
        res.status(500).json({ message: error.message });
    }
};

// CREATE TASK
const createTask = async (req, res) => {
    try {
        const { title, description, status, deadline } = req.body;

        if (!title || !description || !deadline) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const task = await Task.create({
            title,
            description,
            status,
            deadline
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE TASK
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE TASK
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        await task.deleteOne();

        res.json({
            message: "Task deleted",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};