/*
knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
})
 */
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(tbl) {  
    tbl.increments();

    tbl.integer('vin', 17)
    .notNullable();

    tbl.string('make', 128)
    .notNullable();

    tbl.string('model', 128)
    .notNullable();

    tbl.string('mileage', 6)
    .notNullable();

    tbl.string('transmission', 128)
    .nullable();

    tbl.string('status', 128)
    .nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.droptableIfExists('cars');
};
