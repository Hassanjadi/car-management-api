import * as dotenv from 'dotenv'
import knex from 'knex'
dotenv.config()

const knexInstance = knex({
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  }
})

export default knexInstance
