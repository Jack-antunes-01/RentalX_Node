import { inject, injectable } from "tsyringe";

import { Specification } from "@modules/cars/infra/typeorm/entities/Specifications";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: SpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
