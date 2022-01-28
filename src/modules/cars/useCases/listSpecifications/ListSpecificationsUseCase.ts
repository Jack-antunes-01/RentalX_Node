import { Specification } from "../../model/Specifications";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
