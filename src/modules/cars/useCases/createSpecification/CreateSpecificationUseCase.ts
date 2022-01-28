import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(
    private specificationRepository: ISpecificationsRepository
  ) {}

  execute ({ name, description }: IRequest): void {
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
