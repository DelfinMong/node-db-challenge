
exports.up = function (knex) {
    return knex.schema
      .createTable("projects", (tbl) => {
        tbl.increments();
        tbl.string("name", 128)
             .unique()
             .notNullable(); // cant be blank
        tbl.string("description", 128);
        tbl.boolean("completed")
            .notNullable()
            .defaultTo("false");
      })

      .createTable("resource", (tbl) => {
        tbl.increments();
        tbl.string("name")
             .unique()
             .notNullable();
        tbl.string("description", 128)
      })

      .createTable("tasks", (tbl) => {
        tbl.increments();
        tbl.string("description", 128)
            .notNullable();
        tbl.string("notes", 128);
        tbl.boolean("completed")
            .notNullable()
            .defaultTo("false");
        // This iwill be one of my conenction. "FK"
        tbl
          .integer("projects_id") // FK is integer
          .unsigned()
          .notNullable()
          .references("projects.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        // important connection to FK
      })

      .createTable("Projects_Resource", (tbl) => {
        tbl
        .integer("projects_id") // FK is integer
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        tbl
          .integer("resource_id") // FK is integer
          .unsigned()
          .notNullable()
          .references("resource.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

          tbl.primary(['projects_id','resource_id'])

      })
}

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects_resource')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resource')
      .dropTableIfExists('projects')
  };