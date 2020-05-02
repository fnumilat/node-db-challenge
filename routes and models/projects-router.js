const express = require('express');

const db = require('./projects-data-model');

const router = express.Router();

//get all the projects
router.get("/", (req, res) => {
    db.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get the projects" });
    })
})

//get a specific project by its id
router.get("/:id", (req, res) => {
    db.getProjectById(req.params.id)
    .then(project => {
        res.json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get the project" });
    })
})

//create a new project
router.post("/", (req, res) => {
    db.addProject(req.body)
    .then(project => {
        res.json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create the project" });
    })
})

//get resources from a specifc project by its id
router.get("/:id/resources", (req, res) => {
    db.getProjectResources(req.params.id)
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get the resources" });
    })
})



module.exports = router;