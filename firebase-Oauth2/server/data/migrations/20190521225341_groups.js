
exports.up = function(knex, Promise) {
    return knex.schema.createTable("groups", function(tbl) {
        tbl
            .increments("id").primary();
        tbl
            .string("adminID")
            .unsigned()
            .notNullable()
            .references("fbID").inTable("users")
            .onUpdate("CASCADE");
        tbl
            .string("security_code", 100)
            .notNullable();
        tbl
            .string("name", 128)
            .notNullable();
        tbl
            .decimal("fee", 2);
        tbl
            .date("start");
        tbl
            .date("end");
        tbl
            .string("message", 500);
        tbl
            .decimal("total", 2);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("groups");
};
