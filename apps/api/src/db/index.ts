import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { InsertUser, usersTable } from "./schema";

const db = drizzle(process.env.POSTGRES_URL!);

export async function insertUser(user: InsertUser) {
    return await db
        .insert(usersTable)
        .values(user)
        .returning({ insertedId: usersTable.id });
}
