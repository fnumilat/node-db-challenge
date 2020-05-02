const express = require('express');

const db = require('./projects-data-model');

const router = express.Router();

router.get("/", (req, res) => {
    db.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get the projects" });
    })
})




module.exports = router;