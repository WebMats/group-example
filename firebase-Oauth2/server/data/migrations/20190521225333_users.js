
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(tbl) {
    tbl
        .increments("id").primary();
    tbl
        .string("fbID", 128)
        .notNullable()
        .unique();
    tbl
        .string("name", 128)
        .notNullable();
    tbl
        .string("email", 128);
    tbl
        .string("imageURL", 256);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};
