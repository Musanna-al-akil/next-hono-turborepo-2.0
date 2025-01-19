import { Hono } from "hono";
import { cors } from "hono/cors";

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

export default app;
