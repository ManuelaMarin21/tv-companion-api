
import express from "express";
import cors from "cors";
import { series } from "./data/series.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "TV Companion API",
    status: "online"
  });
});



app.get("/api/series", (req, res) => {
  res.json(series);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
