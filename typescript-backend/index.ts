import "reflect-metadata";
import express, { Express } from "express";
import { addRoutes } from "./src/config/routes.config";
import mongoose from "mongoose";
import "dotenv/config";
import { responseFormatter } from "./src/middleware/responseFormatter.middleware";
import cors, { CorsOptions } from "cors";

const app: Express = express();
const port = process.env.PORT;

let corsOptions: CorsOptions = {
  origin: "http://example.com",
};
app.use(cors());

app.use(express.json());
app.use(responseFormatter); // res.json()を統一フォーマットに変換するミドルウェア

addRoutes(app);

async function bootstrap() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Cannot read environment variables.");
    process.exit(1);
  }

  try {
    mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log("Connected To MongoDB");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

bootstrap();
