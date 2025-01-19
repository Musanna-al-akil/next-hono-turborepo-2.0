import { Hono } from "hono";
import { cors } from "hono/cors";
import { insertUser } from "./db";

const app = new Hono().basePath("/api");

app.use(
    "*",
    cors({
        origin: "https://next-hono-turborepo-2-0-web.vercel.app",
        allowMethods: ["GET", "POST", "PUT", "DELETE"],
        allowHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);
app.get("/", (c) => {
    return c.json({ message: "Hello Hono" });
});

app.get("/ping", (c) => {
    return c.json({ message: "ping" });
});

app.post("/signup", async (c) => {
    const { name, email, password } = await c.req.json();

    const user = await insertUser({ name, email, password });

    return c.json({ user });
});

app.post("/login", (c) => {
    return c.json({ message: "ping" });
});

app.post("/logout", (c) => {
    return c.json({ message: "ping" });
});

app.get("/auth/dashboard", (c) => {
    return c.json({ message: "ping" });
});

export default app;
