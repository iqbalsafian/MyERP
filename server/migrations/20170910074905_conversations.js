
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('conversations', table => {
      table.increments().primary();
      table.integer('conversation_type');
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    }),

    knex.schema.createTable('conversation_participants', table => {
      table.increments().primary();
      table.integer('conversation_id').unsigned()
        .references('conversations.id');
      table.integer('entity_id').unsigned()
        .references('entities.id');
      table.boolean('isadmin');
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    }),

    knex.schema.createTable('conversation_messages', table => {
      table.increments().primary();
      table.integer('conversation_id').unsigned()
        .references('conversations.id');
      table.string('message');
      table.integer('message_type').unsigned();
      table.integer('entity_id').unsigned()
        .references('entities.id');
        table.integer('target_id').unsigned()
          .references('entities.id');
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('conversation_messages'),
    knex.schema.dropTable('conversation_participants'),
    knex.schema.dropTable('conversations')
  ])
};
