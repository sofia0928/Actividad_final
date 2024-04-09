import { useState, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './categoria.css';


function ListaCategorias() {
  const [Categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const response = await fetch('http://localhost:8000/categoria');
        if (response.ok) {
          const data = await response.json();
          setCategorias(data);
        } else {
          throw new Error('Error al obtener la lista de usuarios');
        }
      } catch (error) {
        console.error(error);
      }
    };

    obtenerCategorias();
  }, []);

  const handleEliminarUsuario = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/categoria/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Eliminar el usuario de la lista después de eliminarlo en la API
        setCategorias(Categorias.filter((Categorias) => Categorias.id !== id));
      } else {
        throw new Error('Error al eliminar el usuario');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Lista de categorias</h1>
      <div className="botoncito">
        <button className="boton-agregar">
          <Link to="/AgregarCategoria">
            <FaPlus />
          </Link>
        </button>
      </div>
      <div className="tabla">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Categorias.map((Categorias) => (
              <tr key={Categorias.id}>
                <td>{Categorias.id}</td>
                <td>{Categorias.nombre}</td>

                <td>
                  <div className="botones-usuarios">
                    <Link to={`/editarcategoria/${Categorias.id}`}>
                      <button className="boton-editar">
                        <FiEdit />
                      </button>
                    </Link>
                    <button
                      className="boton-eliminar"
                      onClick={() => handleEliminarUsuario(Categorias.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='cate-prod'>

        <Link to="/listaProductos">
          <button className='Productos'>Productos</button>
          </Link>


        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
