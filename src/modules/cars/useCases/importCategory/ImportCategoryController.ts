import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { container } from "tsyringe";

class ImportCategoryController {
  async handle(req: Request, res: Response) {
    const { file } = req;

    console.log(file);

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return res.send();
  }
}

export { ImportCategoryController };
