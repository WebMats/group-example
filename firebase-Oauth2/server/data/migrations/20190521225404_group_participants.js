
exports.up = function(knex, Promise) {
    return knex.schema.createTable("participants", function(tbl) {
        tbl
            .increments("id").primary();
        tbl
            .integer("groupID")
            .unsigned()
            .notNullable()
            .references("id").inTable("groups")
            .onUpdate("CASCADE");
        tbl
            .boolean("verified")
        tbl
            .string("partID")
            .unsigned()
            .notNullable()
            .references("fbID").inTable("users")
            .onUpdate("CASCADE");
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("participants");
};
