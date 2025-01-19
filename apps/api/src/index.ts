import { serve } from "@hono/node-server";

import app from "./app";

const port = (process.env.PORT || 3001) as number;
// eslint-disable-next-line no-console
console.log(`Server is running on port http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port,
});
