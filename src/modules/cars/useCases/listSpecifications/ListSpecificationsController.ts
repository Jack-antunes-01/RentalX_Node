import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private ListSpecificationUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response) {
    const specifications = this.ListSpecificationUseCase.execute();

    return res.json(specifications);
  }
}

export { ListSpecificationsController };
