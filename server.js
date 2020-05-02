const express = require('express');

const projectsRouter = require('./routes and models/projects-router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);

server.use("/", (req, res) => {
    res.json("API is running, welcome!!")
})

module.exports = server;