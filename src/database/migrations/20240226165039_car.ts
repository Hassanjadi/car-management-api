import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cars', (table: Knex.TableBuilder) => {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary()
    table.string('plate').nullable()
    table.string('manufacture').notNullable()
    table.string('model').nullable()
    table.text('image').notNullable()
    table.integer('rentPerDay').notNullable()
    table.integer('capacity').notNullable()
    table.text('description').notNullable()
    table.datetime('availableAt').nullable()
    table.string('transmission').notNullable()
    table.boolean('available').nullable().defaultTo(false)
    table.string('type').notNullable()
    table.integer('year').notNullable()
    table.specificType('options', 'VARCHAR(256)[]')
    table.specificType('specs', 'VARCHAR(256)[]')
    table.uuid('createdBy').nullable()
    table.uuid('updatedBy').nullable().defaultTo(null)
    table.uuid('deletedBy').nullable().defaultTo(null)
    table.timestamps(true, true)

    table.foreign('createdBy').references('id').inTable('users').onDelete('SET NULL')
    table.foreign('updatedBy').references('id').inTable('users').onDelete('SET NULL')
    table.foreign('deletedBy').references('id').inTable('users').onDelete('SET NULL')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cars')
}
