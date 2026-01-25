import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("My first API");
});

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`),
);
