import { Connection, createConnection, getConnectionOptions } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specifications";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  Object.assign(defaultOptions, {
    host,
  });

  return createConnection({
    ...defaultOptions,
    entities: [Category, Specification, User, Car],
  });
};
