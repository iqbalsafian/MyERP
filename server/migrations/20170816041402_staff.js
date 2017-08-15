
exports.up = function(knex, Promise) {
  return knex.schema.createTable('staff', function(table) {
    table.increments();
    table.string('email').notNullable().unique();
    table.string('password_digest').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('staff');
};
