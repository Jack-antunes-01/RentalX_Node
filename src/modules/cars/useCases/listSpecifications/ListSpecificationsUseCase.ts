import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specifications";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

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
