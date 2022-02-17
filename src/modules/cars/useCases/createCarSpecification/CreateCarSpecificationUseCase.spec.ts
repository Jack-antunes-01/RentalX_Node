import { v4 as uuidv4 } from "uuid";

import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create car specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it("should be able to create a new car specification", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
      id: uuidv4(),
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test",
    });

    const specifications_id = [specification.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(car).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });

  it("should not be able to create a new car specification when car doesn't exist", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["54352"];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
