
exports.up = function(knex) {
  return knex.schema
    .createTable('post_image', function (table) {
      table.increments('id');
      table.string('title');
      table.integer('owner').unsigned();
      table.foreign('owner').references('id').inTable('users');
      table.integer('image').unsigned();
      table.foreign('image').references('id').inTable('images');
      table.timestamp('created_on');
      table.timestamp('modified_on');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('post_image')
};
