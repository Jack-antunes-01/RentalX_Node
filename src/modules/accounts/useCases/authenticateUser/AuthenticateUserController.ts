import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUseCase.execute({ email, password });

    return res.json(token);
  }
}

export { AuthenticateUserController };
