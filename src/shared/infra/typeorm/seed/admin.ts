import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const conn = await createConnection("localhost");

  const id = uuidv4();
  const password = await hash("admin", 8);

  await conn.query(`
    INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
    VALUES('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')
  `);

  await conn.close();
}

create().then(() => console.log("User admin created!"));
