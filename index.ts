import { Model } from "objection";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import carRoutes from "./routes/carRoutes";
import userRoutes from "./routes/userRoutes";
import specs from "./utils/swagger";
import knexInstance from "./utils/knex";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

Model.knex(knexInstance);

app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(carRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`⚡️ Server listening on url http://localhost:${PORT}`);
  console.log(
    `⚡️ Swagger access on url http://localhost:${PORT}/api/v1/api-docs`
  );
});
