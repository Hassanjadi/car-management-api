import carRoutes from './routes/carRoutes';
import userRoutes from './routes/userRoutes';
import { Model } from "objection";
import express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import knex from 'knex';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

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

app.use(carRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`⚡️ Server is running on port ${PORT}`);
});