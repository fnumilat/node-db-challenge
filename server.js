const express = require('express');

const projectsRouter = require('./routes and models/projects-router');
const resourcesRouter = require("./routes and models/resources-router")
const tasksRouter = require("./routes and models/tasks-router")

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.use("/", (req, res) => {
    res.json("API is running, welcome!!")
})

module.exports = server;