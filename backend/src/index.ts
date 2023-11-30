import express from 'express';

const app = express();

app.get("/hello", (req, res, next) => {
  return res.send("Hello")
})
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server Open at port ${PORT}`)
})