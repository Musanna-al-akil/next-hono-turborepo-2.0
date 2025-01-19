import { drizzle } from "drizzle-orm/vercel-postgres";
import { InsertUser, usersTable } from "./schema";

const db = drizzle();

export async function insertUser(user: InsertUser) {
    return await db
        .insert(usersTable)
        .values(user)
        .returning({ insertedId: usersTable.id });
}
