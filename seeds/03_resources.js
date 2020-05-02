exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "sanitation crew", description: "from Sanitation Department"},
    { name: "grease removal chemicals", description: "from Sanitation Department"},
    { name: "scrappers", description: "from Sanitation Department"},
    { name: "maintenance crew", description: "from Maintenance Department"},
  ])
};
