import { Connection, createConnection, getConnectionOptions } from "typeorm";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specifications";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";

export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      entities: [
        Category,
        Specification,
        User,
        Car,
        CarImage,
        Rental,
        UserTokens,
      ],
      database:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : defaultOptions.database,
    })
  );
};
