import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { getRepository, Repository } from "typeorm";
import { CarImage } from "../entities/CarImage";

class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }

  async delete(car_id: string, car_image: string): Promise<void> {
    await this.repository.delete({ car_id, image_name: car_image });
  }

  async findImagesById(car_id: string): Promise<CarImage[]> {
    const carImages = await this.repository.find({ car_id });

    return carImages;
  }
}

export { CarsImagesRepository };
