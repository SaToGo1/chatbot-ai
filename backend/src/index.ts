import express from 'express';
import { config } from "dotenv";
config();
const app = express();

app.use(express.json())

app.get("/hello", (req, res, next) => {
  return res.send("Hello")
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server Open at port ${PORT}`)
})