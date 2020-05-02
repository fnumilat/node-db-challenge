exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.string("description")
      table.boolean("completed").defaultTo(false).notNullable()
  })

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id")
    table.integer("project_id").notNull().references("id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE")
    table.string("description").notNull()
    table.boolean("completed").defaultTo(false).notNullable()
    table.string("note").notNullable()
})

await knex.schema.createTable("project_resources", (table) => {
    table.integer("project_id").notNull().references("id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE")
    table.integer("resource_id").notNull().references("id").inTable("resources").onDelete("CASCADE").onUpdate("CASCADE")
})

await knex.schema.createTable("resources", (table) => {
    table.increments("id")
    table.text("name").notNull()
    table.string("description").notNullable()
})

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("resources_")
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
};
