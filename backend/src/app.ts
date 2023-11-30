import express from 'express';
import { config } from "dotenv";
config();
const app = express();

app.use(express.json())

app.get("/hello", (req, res, next) => {
  return res.send("Hello")
})

export default app;