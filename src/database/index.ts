import knex from 'knex'
import * as dotenv from 'dotenv'
dotenv.config()

const knexInstance = knex({
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string
  },
  pool: {
    min: 2,
    max: 10
  }
})

export default knexInstance
