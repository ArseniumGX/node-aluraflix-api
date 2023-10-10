import express, { Express } from "express";

const app: Express = express();

app.use(express.json());
app.set("PORT", process.env.APP_PORT);

export default app;
