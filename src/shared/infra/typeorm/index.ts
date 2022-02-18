import { Connection, createConnection, getConnectionOptions } from "typeorm";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specifications";

export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  Object.assign(defaultOptions, {
    host,
  });

  return createConnection({
    ...defaultOptions,
    entities: [Category, Specification, User, Car, CarImage],
  });
};
