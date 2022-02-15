import { v4 as uuidv4 } from "uuid";

import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { CreateCarUseCase } from "./CreateCarUseCase";
import { AppError } from "@shared/errors/AppError";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a new car when license_plate already exists", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "New car",
        description: "Beautiful car",
        daily_rate: 100,
        license_plate: "OPZ-1446",
        fine_amount: 60,
        brand: "Brand new idea",
        category_id: uuidv4(),
      });

      await createCarUseCase.execute({
        name: "New car1",
        description: "Beautiful car",
        daily_rate: 100,
        license_plate: "OPZ-1446",
        fine_amount: 60,
        brand: "Brand new idea",
        category_id: uuidv4(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Available Car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    expect(car.available).toBe(true);
  });
});
