import { createConnection, getConnectionOptions } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specifications";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database";
  createConnection({
    ...options,
    entities: [Category, Specification, User],
  });
});
