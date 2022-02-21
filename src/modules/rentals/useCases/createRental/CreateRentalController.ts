import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

class CreateRentalController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { car_id, expected_return_date } = req.body;

    const createRentalUseCase = container.resolve(CreateRentalUseCase);

    const rental = createRentalUseCase.execute({
      car_id,
      expected_return_date,
      user_id: id,
    });

    return res.status(201).json(rental);
  }
}

export { CreateRentalController };
