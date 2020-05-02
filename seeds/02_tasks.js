exports.seed = async function(knex) {
  await knex("tasks").insert([
    { project_id: 1, description: "clean the cookie trays with SSD23 chemicals", completed: false, note: "for more information see Michael Sanders" },
    { project_id: 2, description: "get with Stewart Systems to order the new chains", completed: true, note: "job is done very smoothly and the new chains are helping the machines to run and produce faster" },
  ])
};
