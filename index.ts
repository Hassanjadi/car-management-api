import carsRoutes from './routes/carsRoutes';
import { Model } from "objection";
import express  from 'express';
import cors from 'cors';
import knex from 'knex';

const app = express();
const PORT = process.env.PORT || 3000;

const knexInstance = knex({
  client: 'postgresql',
  connection: {
      database: 'database-cars',
      user: 'postgres',
      password: 'postgres',
  },
});

Model.knex(knexInstance);

app.use(express.json());
app.use(cors());

app.use(carsRoutes);

app.listen(PORT, () => {
  console.log(`⚡️ Server is running on port ${PORT}`);
});
