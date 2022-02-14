import { getRepository, Repository } from "typeorm";
import { Specification } from "@modules/cars/entities/Specifications";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async list(): Promise<Specification[]> {
    const data = await this.repository.find();

    return data;
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specificationNameAlreadyExists = await this.repository.findOne({
      name,
    });

    return specificationNameAlreadyExists;
  }
}

export { SpecificationsRepository };
