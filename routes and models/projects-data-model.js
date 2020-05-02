const db = require("../data/config")


module.exports = {
    getProjects,

}

function getProjects() {
    return db("projects")
}