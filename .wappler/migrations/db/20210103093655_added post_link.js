
exports.up = function(knex) {
  return knex.schema
    .createTable('post_link', function (table) {
      table.increments('id');
      table.string('link');
      table.string('title');
      table.integer('owner').unsigned();
      table.foreign('owner').references('id').inTable('users');
      table.datetime('timestamp');
      table.datetime('modified');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('post_link')
};
