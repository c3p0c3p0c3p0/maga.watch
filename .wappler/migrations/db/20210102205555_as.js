
exports.up = function(knex) {
  return knex.schema
    .renameTable('Posts', 'post_text')
    .table('Posts', function (table) {
      table.renameColumn('make', 'title');
      table.renameColumn('model', 'body');
      table.renameColumn('year', 'tags');
      table.integer('tags').alter().unsigned();
    })
    .table('users', function (table) {
      table.dropColumn('company');
    })
    .createTable('post_link', function (table) {
      table.increments('id');
      table.string('title');
      table.string('link');
    })
    .createTable('post_image', function (table) {
      table.increments('id');
      table.integer('image').unsigned();
      table.foreign('image').references('id').inTable('images');
      table.string('title');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Posts', function (table) {
      table.renameColumn('title', 'make');
      table.renameColumn('body', 'model');
      table.renameColumn('tags', 'year');
      table.string('year', 50).alter();
    })
    .renameTable('post_text', 'Posts')
    .table('users', function (table) {
      table.string('company', 50).defaultTo('NULL');
    })
    .dropTable('post_link')
    .dropTable('post_image')
};
