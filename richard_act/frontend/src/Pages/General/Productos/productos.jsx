import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch("http://localhost:8000/productos");
        if (response.ok) {
          const data = await response.json();
          setProductos(data);
        } else {
          throw new Error("Error al obtener la lista de productos");
        }
      } catch (error) {
        console.error(error);
      }
    };

    obtenerProductos();
  }, []);

  const handleEliminarProducto = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/productos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProductos(productos.filter((producto) => producto.id !== id));
      } else {
        throw new Error("Error al eliminar el producto");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="botoncito">
        <button className="boton-agregar">
          <Link to="/agregarProductos">
            <FaPlus />
          </Link>
        </button>
      </div>
      <div className="tabla">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoría Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.CategoriaId}</td>
                <td>
                  <div className="botones-productos">
                    <Link to={`/editarProductos/${producto.id}`}>
                      <button className="boton-editar">
                        <FiEdit />
                      </button>
                    </Link>
                    <button
                      className="boton-eliminar"
                      onClick={() => handleEliminarProducto(producto.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cate-prod">
          <Link to="/categorias">
            <button className="Categorias">Categorías</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListaProductos;
