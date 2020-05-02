exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Clean the cookie trays", description: "Having Sanitation Department to clean the cookie trays on 6/2/2020", completed: false },
    { name: "Autobake 3 chain changeover", description: "Having Maintenance Department to change the chains on 5/1/2020", completed: true },
  ])
};
