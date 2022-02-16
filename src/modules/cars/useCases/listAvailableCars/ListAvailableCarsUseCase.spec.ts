import { v4 as uuidv4 } from "uuid";

import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    const car2 = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car, car2]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand teste",
      category_id: uuidv4(),
    });

    await carsRepositoryInMemory.create({
      name: "Newest car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "New car",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand teste",
      category_id: uuidv4(),
    });

    await carsRepositoryInMemory.create({
      name: "Newest car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Brand teste",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Newest car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand teste",
      category_id: uuidv4(),
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: car.category_id,
    });

    expect(cars).toEqual([car]);
  });
});
