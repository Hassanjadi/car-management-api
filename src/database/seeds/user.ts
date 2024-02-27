import { Knex } from 'knex'
import bcrypt from 'bcrypt'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Hash password using bcrypt
  const hashedPassword = await bcrypt.hash('superadmin', 0)

  // Inserts seed entries
  await knex('users').insert([
    {
      username: 'Superadmin',
      email: 'superadmin@gmail.com',
      password: hashedPassword,
      role: 'Superadmin'
    }
  ])
}
