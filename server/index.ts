import { Hono } from "hono";

const app = new Hono();

const serverRouter = app.get("/api", (c) => {
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
