// src/db.ts
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { InsertUser, usersTable } from "./schema";

config({ path: ".env" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle({ client: sql });

export async function insertUser(user: InsertUser) {
    return await db
        .insert(usersTable)
        .values(user)
        .returning({ insertedId: usersTable.id });
}
