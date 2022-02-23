import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

import { AppError } from "@shared/errors/AppError";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayJsProvider: DayjsDateProvider;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    dayJsProvider = new DayjsDateProvider();
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJsProvider,
      carsRepositoryInMemory
    );
  });

  it("should be able to create rental", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    const rental = await createRentalUseCase.execute({
      user_id: "12345",
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create rental if there is a rental already open to the user", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    await createRentalUseCase.execute({
      user_id: "12345",
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    await expect(
      createRentalUseCase.execute({
        user_id: "12345",
        car_id: "123123",
        expected_return_date: dayAdd24Hours,
      })
    ).rejects.toEqual(new AppError("There's a rental in progress for user"));
  });

  it("should not be able to create rental if there is a rental already open to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "New car",
      description: "Beautiful car",
      daily_rate: 100,
      license_plate: "OPZ-1446",
      fine_amount: 60,
      brand: "Brand new idea",
      category_id: uuidv4(),
    });

    await createRentalUseCase.execute({
      user_id: "123",
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    expect(
      createRentalUseCase.execute({
        user_id: "321",
        car_id: car.id,
        expected_return_date: dayAdd24Hours,
      })
    ).rejects.toEqual(new AppError("Car is unavailable"));
  });

  it("should not be able to create rental with less than 24 hours of duration", async () => {
    await expect(
      createRentalUseCase.execute({
        user_id: "123",
        car_id: "test",
        expected_return_date: dayjs().toDate(),
      })
    ).rejects.toEqual(
      new AppError("Can't create a rental with less than 24 hours of duration")
    );
  });
});
