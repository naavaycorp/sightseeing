import { db, pool } from "../server/db/db";
import * as schema from "../server/db/schema";
import { seed } from "drizzle-seed";

const seedDB = async () => {
  try {
    await seed(db, schema).refine((f) => ({
      usersTable: {
        count: 10,
        columns: {
          name: f.fullName({ isUnique: true }),
          email: f.email(),
          password: f.string(),
        },
      },
    }));
    console.log("Seeded 10 users.");
  } catch (error) {
    console.error("Failed to seed the database:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

await seedDB();
