
exports.up = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.integer('upvotes');
      table.integer('downvotes');
      table.integer('image').unsigned();
      table.foreign('image').references('id').inTable('images');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.dropColumn('upvotes');
      table.dropColumn('downvotes');
      table.dropForeign('image');
      table.dropColumn('image');
    })
};
