import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


function AgregarProductos() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [CategoriaId, setCategorias] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          CategoriaId: CategoriaId
        }),
      });

      if (response.ok) {
        setTimeout(() => {
          navigate("/listaProductos");
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al agregar usuario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='formulario-agregar'>
      <h1>Agregar Nuevo Producto</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Categoria"
            value={CategoriaId}
            onChange={(e) => setCategorias(e.target.value)}
          />
          
          <button type="submit">Enviar</button>
        </form>
        <Link to="/listaProductos">
          <button>Volver a la Lista de Productos</button>
        </Link>
      </div>
    </div>
  );
}

export default AgregarProductos;
