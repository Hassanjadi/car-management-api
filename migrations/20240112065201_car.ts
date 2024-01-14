import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('car', (table: Knex.TableBuilder) => {
        table.uuid('id').defaultTo(knex.fn.uuid())
        table.string('plate', 10).notNullable();
        table.string('manufacture', 20).notNullable();
        table.string('model', 20).notNullable();
        table.text('image').notNullable();
        table.integer('rentPerDay').notNullable();
        table.integer('capacity').notNullable();
        table.text('description').notNullable();
        table.datetime('availableAt').notNullable();
        table.string('transmission', 20).notNullable();
        table.boolean('available').notNullable().defaultTo(false);
        table.string('type', 100).notNullable();
        table.integer('year', 4).notNullable();
        table.specificType('options', 'VARCHAR(256)[]');
        table.specificType('specs', 'VARCHAR(256)[]');
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('car');
}