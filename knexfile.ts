import type { Knex } from 'knex'
import * as dotenv from 'dotenv'
dotenv.config()

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME as string,
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME as string,
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }
}

module.exports = config
