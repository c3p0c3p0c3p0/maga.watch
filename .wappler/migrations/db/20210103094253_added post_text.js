
exports.up = function(knex) {
  return knex.schema
    .table('post_link', function (table) {
      table.renameColumn('timestamp', 'created_on');
      table.renameColumn('modified', 'modified_on');
    })
    .table('post_text', function (table) {
      table.renameColumn('make', 'title');
      table.renameColumn('model', 'body');
      table.dropColumn('year');
      table.integer('owner').unsigned();
      table.foreign('owner').references('id').inTable('users');
      table.datetime('created_on');
      table.datetime('modified_on');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('post_link', function (table) {
      table.renameColumn('created_on', 'timestamp');
      table.renameColumn('modified_on', 'modified');
    })
    .table('post_text', function (table) {
      table.renameColumn('title', 'make');
      table.renameColumn('body', 'model');
      table.string('year', 50).defaultTo('NULL');
      table.dropForeign('owner');
      table.dropColumn('owner');
      table.dropColumn('created_on');
      table.dropColumn('modified_on');
    })
};
