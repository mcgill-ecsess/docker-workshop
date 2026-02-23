import express from "express";

const app = express();
const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello from Express on Bun!");
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}/`);
});