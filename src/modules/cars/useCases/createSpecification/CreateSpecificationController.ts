import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(req: Request, res: Response) {
    try {
      const { name, description } = req.body;

      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );

      await createSpecificationUseCase.execute({ name, description });

      return res.status(201).send();
    } catch (err) {
      const message = err.message;
      return res.status(400).json({ error: message });
    }
  }
}

export { CreateSpecificationController };
