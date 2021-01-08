
exports.up = function(knex) {
  return knex.schema
    .renameTable('cars', 'Posts')
    .table('cars', function (table) {
      table.renameColumn('id', 'ID');
      table.dropPrimary();
      table.increments('ID');
      table.renameColumn('make', 'Body');
      table.string('Body').alter();
      table.renameColumn('model', 'Timestamp');
      table.datetime('Timestamp').alter();
      table.renameColumn('year', 'OwnerID');
      table.uuid('OwnerID').alter();
    })
    .table('users', function (table) {
      table.renameColumn('first_name', 'FirstName');
      table.renameColumn('last_name', 'LastName');
      table.renameColumn('gender', 'Gender');
      table.renameColumn('email', 'Email');
      table.dropColumn('company');
      table.renameColumn('avatar', 'Avatar');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.renameColumn('ID', 'id');
      table.increments('id').primary().alter();
      table.renameColumn('Body', 'make');
      table.string('make', 50).alter();
      table.renameColumn('Timestamp', 'model');
      table.string('model', 50).alter();
      table.renameColumn('OwnerID', 'year');
      table.string('year', 50).alter();
    })
    .renameTable('Posts', 'cars')
    .table('users', function (table) {
      table.renameColumn('FirstName', 'first_name');
      table.renameColumn('LastName', 'last_name');
      table.renameColumn('Gender', 'gender');
      table.renameColumn('Email', 'email');
      table.string('company', 50).defaultTo('NULL');
      table.renameColumn('Avatar', 'avatar');
    })
};
