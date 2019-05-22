
exports.up = function(knex, Promise) {
    return knex.schema.createTable("sleep", function(tbl) {
        tbl
            .increments("id").primary();
        tbl
            .string("userID")
            .unsigned()
            .notNullable()
            .references("fbID").inTable("users")
            .onUpdate("CASCADE");
        tbl
            .date("date");
        tbl
            .decimal("amount");
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("sleep");
};
