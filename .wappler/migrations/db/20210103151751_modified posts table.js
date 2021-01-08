
exports.up = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.string('title', 500).alter();
      table.string('body', 12000).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.string('title', 255).alter();
      table.string('body', 255).alter();
    })
};
