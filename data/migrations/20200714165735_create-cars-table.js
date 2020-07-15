exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");
    tbl.string("vin", 60).unique().notNullable();
    tbl.string("model", 60).unique().notNullable();
    tbl.integer("mileage");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
