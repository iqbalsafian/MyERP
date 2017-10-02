
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entities', (table) => {
    table.increments();
    table.string('entity_id');
    table.string('parent_id');
    table.string('email').unique().notNullable();
    table.string('password_digest')
    table.string('fullname').notNullable();
    table.string('firstname');
    table.string('lastname');
    table.string('designation');
    table.string('department_id');
    table.string('address1');
    table.string('address2');
    table.string('postcode');
    table.string('city');
    table.string('state');
    table.string('country');
    table.boolean('isstaff').defaultTo(0);
    table.boolean('isdepartment').defaultTo(0);
    table.boolean('iscustomer').defaultTo(0);
    table.boolean('issupplier').defaultTo(0);
    table.boolean('isfixedasset').defaultTo(0);
    table.integer('department_num').defaultTo(0);
    table.boolean('isonline').defaultTo(false);
    table.boolean('is_allowed_to_login').defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entities');
};
