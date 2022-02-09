import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

      await createCategoryUseCase.execute({ name, description });

      return response.status(201).send();
    } catch (err) {
      const message = err.message;
      return response.status(400).json({
        error: message,
      });
    }
  }
}

export { CreateCategoryController };
