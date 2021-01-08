
exports.up = function(knex) {
  return knex.schema
    .createTable('post', function (table) {
      table.increments('id');
      table.string('title');
      table.string('body');
      table.uuid('owner');
      table.datetime('created_on');
      table.datetime('modified_on');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('post')
};
