import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user', (table: Knex.TableBuilder) => {
        table.uuid('id').defaultTo(knex.fn.uuid()).primary();
        table.string('username').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('role').notNullable().defaultTo('Member');
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}