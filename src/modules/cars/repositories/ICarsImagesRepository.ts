import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
  create(car_id: string, image_name: string): Promise<CarImage>;
  delete(car_id: string, car_image: string): Promise<void>;
  findImagesById(car_id: string): Promise<CarImage[]>;
}

export { ICarsImagesRepository };
