import { config } from "dotenv";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { usersTable } from "./schema";

config({ path: ".env" });

const db = drizzle();

interface User {
    name: string;
    email: string;
    password: string;
}

export async function insertUser(user: User) {
    return await db
        .insert(usersTable)
        .values(user)
        .returning({ insertedId: usersTable.id });
}
