import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const avatar = req.file.filename;

    const updateAvatarUserUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateAvatarUserUseCase.execute({ id, avatar });

    return res.status(204).send();
  }
}

export { UpdateUserAvatarController };
