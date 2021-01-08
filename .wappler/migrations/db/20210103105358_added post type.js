
exports.up = function(knex) {
  return knex.schema
    .createTable('post', function (table) {
      table.increments('id');
      table.enum('post_type');
    })
    .createTable('post_type', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('post')
    .dropTable('post_type')
};
