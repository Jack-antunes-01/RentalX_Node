import { getRepository, Repository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";
import { Specification } from "../entities/Specifications";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async list(): Promise<Specification[]> {
    const data = await this.repository.find();

    return data;
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specificationNameAlreadyExists = await this.repository.findOne({
      name,
    });

    return specificationNameAlreadyExists;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);

    return specifications;
  }
}

export { SpecificationsRepository };
