import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user").del();

    // Inserts seed entries
    await knex("user").insert([
        {
            id: 'c1a85e8c-bd09-4bf1-9613-602c19f7f4f1',
            username: 'John Doe',
            email: 'member@example.com',
            password: 'hashed_password',
            role: 'member',
        }
    ]);
};