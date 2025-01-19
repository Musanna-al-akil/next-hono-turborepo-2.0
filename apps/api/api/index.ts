import { handle } from "@hono/node-server/vercel";
import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
});

export default handle(app);
