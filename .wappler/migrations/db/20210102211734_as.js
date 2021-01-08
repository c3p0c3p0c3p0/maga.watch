
exports.up = function(knex) {
  return knex.schema
    .dropTable('Posts')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('Posts', function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 50).defaultTo('NULL');
      table.string('model', 50).defaultTo('NULL');
      table.string('year', 50).defaultTo('NULL');
    })
};
