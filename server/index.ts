import { Hono } from "hono";
import { auth } from "./lib/auth";

const app = new Hono().basePath("/api");

const serverRouter = app
  .on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw))
  .get("/people", (c) => {
    const people = [
      { id: 1, name: "yuvraj" },
      { id: 2, name: "vidhya" },
      { id: 3, name: "mohitha" },
      { id: 4, name: "shanvitha" },
      { id: 5, name: "Palamiammal" },
    ];
    return c.json(people);
  });
export type AppType = typeof serverRouter;
export default app;
