
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


//endpoint que muestra las series
app.get("/api/series", (req, res) => {
  res.json(series);
});



//endpointe que modifica el estado de la serie
app.patch("/api/series/:id", (req, res) => {
  const id = Number(req.params.id);

  const serie = series.find((item) => item.id === id);

  if (!serie) {
    return res.status(404).json({
      error: "Serie no encontrada"
    });
  }

  Object.assign(serie, req.body);

  res.json(serie);
});


//endpoint que hace un post para crear una nueva serie


app.post("/api/series", (req, res) => {
  const nuevaSerie = req.body;

  if (!nuevaSerie.title) {
    return res.status(400).json({
      error: "El título de la serie es obligatorio"
    });
  }

  nuevaSerie.id = series.length + 1;

  series.push(nuevaSerie);

  res.status(201).json(nuevaSerie);
});


//endpoint que elimina 

app.delete("/api/series/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = series.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Serie no encontrada"
    });
  }

  const serieEliminada = series.splice(index, 1);

  res.json(serieEliminada[0]);
});


//endpoint que devuelve la serie segun id
app.get("/api/series/:id", (req, res) => {
  const id = Number(req.params.id);

  const serie = series.find((serie) => serie.id === id);

  if (!serie) {
    return res.status(404).json({
      error: "Serie no encontrada"
    });
  }

  res.json(serie);
});


app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
