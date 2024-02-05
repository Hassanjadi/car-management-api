import knex from "knex";

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "database-cars",
    user: "postgres",
    password: "postgres",
  },
});

export default knexInstance;
