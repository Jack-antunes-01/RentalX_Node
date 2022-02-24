import dotenv from "dotenv";

dotenv.config();

import swaggerUi from "swagger-ui-express";
import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";
import "@shared/container";

import createConnection from "@shared/infra/typeorm";
import { AppError } from "@shared/errors/AppError";
import { router } from "@shared/infra/http/routes";

import swaggerFile from "../../../swagger.json";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    message: `Internal server error - ${err.message}`,
  });
});

export { app };
