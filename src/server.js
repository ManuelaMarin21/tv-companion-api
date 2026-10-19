
import express from "express";
import cors from "cors";

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

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
