import { Router } from "express";
import { crearCategoria, getAllCategoria, getCategoria, putCategoria, deleteCategoria} from "../controllers/categoria.controller.js";


const categoriaRouter = Router();

categoriaRouter.get("/categoria", getAllCategoria);
categoriaRouter.get("/categoria/:id", getCategoria); 
categoriaRouter.post("/categoria", crearCategoria);
 categoriaRouter.put("/categoria/:id", putCategoria);
categoriaRouter.delete("/categoria/:id", deleteCategoria);
 
export default categoriaRouter;
