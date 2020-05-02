const express = require('express');

const db = require('./projects-data-model');

const router = express.Router();

//get all the resources
router.get("/", (req, res) => {
    db.getResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get the resources" });
    })
})

//create a new resource
router.post("/", (req, res) => {
    db.addResource(req.body)
    .then(resource => {
        res.json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create the resource" });
    })
})



module.exports = router;