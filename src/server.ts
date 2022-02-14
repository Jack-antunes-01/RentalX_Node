import swaggerUi from "swagger-ui-express";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";

import "@shared/container";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppError } from "@errors/AppError";

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

app.listen(3000, () => console.log("Server running on port 3000"));
