import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './agregarCategoria.css';

function AgregarCategorias() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/categoria", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,

        }),
      });
      
      if (response.ok) {
        setTimeout(() => {
          navigate("/categorias");
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al agregar categoria");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='formulario-agregar'>
      <h1>Agregar Categoria</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
         
          <button type="submit">Enviar</button>
        </form>
        <Link to="/categorias">
          <button>Volver a la Lista de Categorias</button>
        </Link>
      </div>
    </div>
  );
}

export default AgregarCategorias;
