import { Router } from "express";
import { crearProducto, getAllProducto, getProducto, putProducto, deleteProducto } from "../controllers/productos.controllers.js";


const productosRouter = Router();

productosRouter.get("/productos/:id", getProducto); 
productosRouter.post("/productos", crearProducto);
productosRouter.put("/productos/:id", putProducto);
productosRouter.delete("/productos/:id", deleteProducto);
productosRouter.get("/productos", getAllProducto);
 
export default productosRouter;
