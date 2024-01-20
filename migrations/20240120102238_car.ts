import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('car', (table: Knex.TableBuilder) => {
        table.uuid('id').defaultTo(knex.fn.uuid()).primary();
        table.string('plate').notNullable();
        table.string('manufacture').notNullable();
        table.string('model').notNullable();
        table.text('image').notNullable();
        table.integer('rentPerDay').notNullable();
        table.integer('capacity').notNullable();
        table.text('description').notNullable();
        table.datetime('availableAt').notNullable();
        table.string('transmission').notNullable();
        table.boolean('available').notNullable().defaultTo(false);
        table.string('type').notNullable();
        table.integer('year').notNullable();
        table.specificType('options', 'VARCHAR(256)[]');
        table.specificType('specs', 'VARCHAR(256)[]');
        table.uuid("createdBy").notNullable();
        table.uuid("updatedBy").notNullable();
        table.uuid("deletedBy").nullable().defaultTo(null);
        table.timestamps(true, true);

        table.foreign("createdBy").references("id").inTable('user').onDelete("SET NULL");
        table.foreign("updatedBy").references("id").inTable('user').onDelete("SET NULL");
        table.foreign("deletedBy").references("id").inTable('user').onDelete("SET NULL");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('car');
}