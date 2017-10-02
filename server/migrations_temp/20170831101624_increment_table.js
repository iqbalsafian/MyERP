
exports.up = function(knex, Promise) {
  return knex.schema.createTable('increment_table', (table) => {
    table.increments();
    table.string('the_prefix');
    table.string('entity_name');
    table.integer('current_number');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('increment_table');
};
