import express from "express";
import morgan from "morgan";
import cors from "cors";
import categoriaRouter from "./routes/categoria.routes.js";
import productosRouter from "./routes/productos.routes.js";

const app = express();


app.use(morgan("dev"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Cada vez que se llame por get muestre que funciona
app.get("/", (req, res) => {
    res.send("Funciona");
});

app.use(
  
    categoriaRouter,
    productosRouter
)

//RUTAS EN APP
export default app;

