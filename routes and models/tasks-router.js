const express = require('express');

const db = require('./projects-data-model');

const router = express.Router();

//get all the tasks
router.get("/", (req, res) => {
    db.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get the tasks" });
    })
})

//create a new task
router.post("/", (req, res) => {
    db.addTask(req.body)
    .then(task => {
        res.json(task)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create the task" });
    })
})



module.exports = router;