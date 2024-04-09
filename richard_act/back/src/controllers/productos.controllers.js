import Producto from "../models/productos.js";

export const crearProducto = async (req, res) => {
  try {
    const { CategoriaId, ...productoData } = req.body;

    const nuevoProducto = await Producto.create({
      ...productoData,
      CategoriaId: CategoriaId,
    });

    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllProducto = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const putProducto = async (req, res) => {
  try {
    const { CategoriaId, ...productoData } = req.body;

    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await producto.update({
      ...productoData,
      CategoriaId: CategoriaId,
    });

    res.status(200).json({ message: "Producto actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await producto.destroy();
    res.status(200).json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
