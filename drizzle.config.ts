<<<<<<< HEAD
=======
/* import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
} satisfies Config; */
>>>>>>> 72f1b14 (atualizado)
import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
<<<<<<< HEAD
  dialect: "postgresql",
=======
>>>>>>> 72f1b14 (atualizado)
  schema: "./src/db/schema.ts",
  out: "./src/drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
<<<<<<< HEAD
  }
} satisfies Config;
=======
  },
};
>>>>>>> 72f1b14 (atualizado)
