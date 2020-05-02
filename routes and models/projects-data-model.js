const db = require("../data/config")


module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask,
    getProjectResources,

}

//get all the projects
function getProjects() {
    return db("projects")
}

//get a specific project by its id
function getProjectById(project_id) {
    return db("projects")
    .where({"projects.id": project_id})
    .first()
}

//create a new project
function addProject(project) {
    const {name, description, completed} = project 
    return db("projects")
    .insert({name, description, completed})
    .then((ids) => {
        return getProjectById(ids[0])
    })
}

//get all the resources
function getResources() {
    return db("resources")
}

//create a new resource
function addResource(resource) {
    return db("resources")
    .insert(resource)
}

//get all the tasks
function getTasks() {
    return db("tasks as t")
    .leftJoin("projects as p", "p.id", "t.project_id")
    .select(["p.id as project_id", "p.name as project_name", "p.description as project_description", "t.description as task_description", "t.note"])
}

//create a new task
function addTask(task) {
    const {project_id, description, completed, note} = task
    return db("tasks")
    .insert({project_id, description, completed, note})
    .then(ids => ({id: ids[0]}))
}

//get resources from a specifc project by its id
function getProjectResources(project_id) {
    return db("projects as p")
    .where("p.id", project_id)
    .join("project_resources as p_r", "p.id", "p_r.project_id")
    .join("resources as r", "p_r.resource_id", "r.id")
    .select("p.name as project_name", "r.name as resource_name", "r.description as resource_description")
}