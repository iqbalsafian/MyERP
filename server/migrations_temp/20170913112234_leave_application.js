
exports.up = function(knex, Promise) {
  return knex.schema.createTable('leave_application', table => {
    table.increments();
    table.integer('applicant_id')
      .unsigned()
      .references('entities.id');
    table.integer('leave_type').unsigned();
    table.string('applicant_remarks');
    table.string('date_from').notNullable().defaultTo(knex.raw('now()'));
    table.string('date_to').notNullable().defaultTo(knex.raw('now()'));
    table.integer('reviewed_by')
      .unsigned()
      .references('entities_id');
    table.integer('approval_status');
    table.string('approval_remarks');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leave_application');
};
